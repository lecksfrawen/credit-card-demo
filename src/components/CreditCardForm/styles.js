import styled from "styled-components"
import CreditCards from "react-credit-cards"
import { Card, CardContent } from "@material-ui/core"

export const StyledCreditCard = styled(CreditCards)`
  margin-bottom: 140px;
`

export const MaterialCardStyled = styled(Card)`
  padding-top: 125px;
`

export const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;

  > div {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const DateCVVContainer = styled.div`
  display: flex;
`
