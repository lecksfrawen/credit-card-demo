import styled from "styled-components"
import { Favorite } from "@material-ui/icons"

import { MediaQueryContainerCss } from "theme"

export const BottomFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  color: white;
  z-index: 10;
`

export const FooterContainer = styled.div`
  ${MediaQueryContainerCss}

  .createdBy {
    float: right;
    padding: 15px 0;
  }
`

export const HeartIcon = styled(Favorite)`
  position: relative;
  top: 3px;
  width: 18px;
  height: 18px;
`
