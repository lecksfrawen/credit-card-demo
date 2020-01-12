import styled from "styled-components"
import { AppBar, Toolbar } from "@material-ui/core"

import { MediaQueryContainerCss } from "theme"

export const AppBarTransparent = styled(AppBar)`
  box-shadow: none;
  padding: 0.625rem 0;
  margin-bottom: 20px;

  position: absolute;
  top: 0;
  background-color: transparent;
  color: white;
`

export const ToolbarMediaQuery = styled(Toolbar)`
  ${MediaQueryContainerCss}

  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`
