import React, { useState } from "react"
import { Form, Field } from "react-final-form"
import { Button, CardActions, TextField } from "@material-ui/core"
import CreditCards from "react-credit-cards"
import "react-credit-cards/es/styles-compiled.css"

import {
  MaterialCardStyled,
  CardContentStyled,
  DateCVVContainer,
} from "./styles"
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  shouldShowError,
  validateCreditCardFormValues,
} from "./utils"

const initialValues = {
  name: "",
  number: "",
  expiry: "",
  cvc: "",
}

const CreditCardForm = () => {
  const [focus, setFocus] = useState("")

  const handleFocus = e => {
    setFocus(e.target.name)
  }

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validateCreditCardFormValues}
      initialValues={initialValues}
      render={({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          <div
            style={{
              marginBottom: -125,
            }}
          >
            <CreditCards
              cvc={values.cvc || ""}
              expiry={values.expiry || ""}
              name={values.name || ""}
              number={values.number || ""}
              focused={focus || ""}
            />
          </div>
          <MaterialCardStyled>
            <CardContentStyled>
              <Field
                // base
                name="number"
                // f-f
                parse={value => value && formatCreditCardNumber(value)}
                format={value => (value ? formatCreditCardNumber(value) : "")}
                render={fieldProps => {
                  const { input, meta } = fieldProps
                  const error = shouldShowError(meta)

                  return (
                    <TextField
                      {...input}
                      required
                      label="Card Number"
                      placeholder="Card Number"
                      variant="outlined"
                      onFocus={handleFocus}
                      helperText={error ? meta.error : " "}
                      error={error}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )
                }}
              />
              <Field
                // base
                name="name"
                // f-f
                render={fieldProps => {
                  const { input, meta } = fieldProps
                  const error = shouldShowError(meta)

                  return (
                    <TextField
                      {...input}
                      required
                      label="Card Holder"
                      variant="outlined"
                      onFocus={handleFocus}
                      helperText={error ? meta.error : " "}
                      error={error}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )
                }}
              />
              <DateCVVContainer>
                <Field
                  // base
                  name="expiry"
                  // f-f
                  parse={value => value && formatExpirationDate(value)}
                  format={value => (value ? formatExpirationDate(value) : "")}
                  render={fieldProps => {
                    const { input, meta } = fieldProps
                    const error = shouldShowError(meta)
                    return (
                      <TextField
                        {...input}
                        required
                        label="Expires"
                        variant="outlined"
                        onFocus={handleFocus}
                        helperText={error ? meta.error : " "}
                        error={error}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )
                  }}
                />
                <Field
                  // base
                  name="cvc"
                  // f-f
                  parse={value => value && formatCVC(value)}
                  format={value => (value ? formatCVC(value) : "")}
                  render={fieldProps => {
                    const { input, meta } = fieldProps
                    const error = shouldShowError(meta)
                    return (
                      <TextField
                        {...input}
                        label="CVV"
                        variant="outlined"
                        onFocus={handleFocus}
                        helperText={error ? meta.error : " "}
                        error={error}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )
                  }}
                />
              </DateCVVContainer>
            </CardContentStyled>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                disabled={submitting}
              >
                Submit
              </Button>
            </CardActions>
          </MaterialCardStyled>
        </form>
      )}
    />
  )
}

export default CreditCardForm
