import React, { useState } from "react"
import CreditCards from "react-credit-cards"
import { Form, Field } from "react-final-form"
import { Button, CardActions, TextField } from "@material-ui/core"
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
} from "./utils"

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
      initialValues={{
        cvc: "",
        expiry: "",
        name: "",
        number: "",
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div
            style={{
              marginBottom: -125,
            }}
          >
            <CreditCards
              cvc={values.cvc}
              expiry={values.expiry}
              name={values.name}
              number={values.number}
              focused={focus}
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
                  const { input } = fieldProps

                  return (
                    <TextField
                      {...input}
                      label="Card Number"
                      placeholder="Card Number"
                      variant="outlined"
                      onFocus={handleFocus}
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
                  const { input } = fieldProps

                  return (
                    <TextField
                      {...input}
                      label="Card Holder"
                      variant="outlined"
                      onFocus={handleFocus}
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
                    const { input } = fieldProps
                    return (
                      <TextField
                        {...input}
                        label="Expires"
                        variant="outlined"
                        onFocus={handleFocus}
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
                    const { input } = fieldProps
                    return (
                      <TextField
                        {...input}
                        label="CVV"
                        variant="outlined"
                        onFocus={handleFocus}
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
