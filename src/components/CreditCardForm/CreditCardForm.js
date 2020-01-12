import React from "react"
import { Button, Card, CardActions, TextField } from "@material-ui/core"

import { CardContentStyled, DateCVVContainer } from "./styles"

const CreditCardForm = () => {
  return (
    <Card>
      <CardContentStyled>
        <TextField
          label="Card Number"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Card Holder"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <DateCVVContainer>
          <TextField
            label="Month"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Year"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="CVV"
            variant="outlined"
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
    </Card>
  )
}

export default CreditCardForm
