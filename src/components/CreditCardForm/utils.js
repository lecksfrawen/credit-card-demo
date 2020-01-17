import Payment from "payment"

function clearNumber(value = "") {
  return value.replace(/\D+/g, "")
}

export function formatCreditCardNumber(value) {
  if (!value) {
    return value
  }

  const issuer = Payment.fns.cardType(value)
  const clearValue = clearNumber(value)
  let nextValue

  switch (issuer) {
    case "amex":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`
      break
    case "dinersclub":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`
      break
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`
      break
  }

  return nextValue.trim()
}

export function formatCVC(value, prevValue, allValues = {}) {
  const clearValue = clearNumber(value)
  let maxLength = 4

  if (allValues.number) {
    const issuer = Payment.fns.cardType(allValues.number)
    maxLength = issuer === "amex" ? 4 : 3
  }

  return clearValue.slice(0, maxLength)
}

export function formatExpirationDate(value) {
  const clearValue = clearNumber(value)

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`
  }

  return clearValue
}

export function shouldShowError(meta) {
  return (
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched
  )
}

export function validateCreditCardFormValues(values) {
  const { number, name, expiry = "", cvc } = values
  const errors = {}

  // Credit card number
  if (!number) {
    errors.number = "Required"
  } else if (!Payment.fns.validateCardNumber(number)) {
    errors.number = "Invalid Credit Card Number"
  }

  // Name
  if (!name) {
    errors.name = "Required"
  }

  // expiry
  const [month, year] = expiry.split("/")
  if (!expiry) {
    errors.expiry = "Required"
  } else if (!Payment.fns.validateCardExpiry(month, year)) {
    errors.expiry = "Invalid Card Expiry"
  }

  // CVV
  if (!cvc) {
    errors.cvc = "Required"
  } else if (!Payment.fns.validateCardCVC(cvc)) {
    errors.cvc = "Invalid Verification Code"
  }

  return errors
}
