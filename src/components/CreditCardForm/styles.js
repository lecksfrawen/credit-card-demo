import styled from "styled-components"

import { Card, CardContent, TextField } from "@material-ui/core"

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
