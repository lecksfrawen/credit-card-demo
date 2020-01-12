import React, { useState } from "react"
import CreditCards from "react-credit-cards"
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
  formatFormData,
} from "./utils"

const CreditCardForm = () => {
  const [cardState, setCardState] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  })
  const [focus, setFocus] = useState("")

  const handleInputChange = e => {
    let { name, value } = e.target

    if (name === "number") {
      value = formatCreditCardNumber(value)
    }
    if (name === "expiry") {
      value = formatExpirationDate(value)
    }
    if (name === "cvc") {
      value = formatCVC(value)
    }

    setCardState({
      ...cardState,
      [name]: value,
    })
  }

  const handleFocus = e => {
    setFocus(e.target.name)
  }

  return (
    <>
      <CreditCards
        style={{
          marginBottom: -125,
        }}
        cvc={cardState.cvc}
        expiry={cardState.expiry}
        focused={focus}
        name={cardState.name}
        number={cardState.number}
      />
      <MaterialCardStyled>
        <CardContentStyled>
          <TextField
            label="Card Number"
            variant="outlined"
            name="number"
            onChange={handleInputChange}
            onFocus={handleFocus}
            value={cardState.number}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Card Holder"
            variant="outlined"
            name="name"
            onChange={handleInputChange}
            onFocus={handleFocus}
            value={cardState.name}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <DateCVVContainer>
            <TextField
              label="Expires"
              variant="outlined"
              name="expiry"
              onChange={handleInputChange}
              onFocus={handleFocus}
              value={cardState.expiry}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="CVV"
              variant="outlined"
              name="cvc"
              onChange={handleInputChange}
              onFocus={handleFocus}
              value={cardState.cvc}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </DateCVVContainer>
        </CardContentStyled>
        <CardActions>
          <Button fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </CardActions>
      </MaterialCardStyled>
    </>
  )
}

export default CreditCardForm
