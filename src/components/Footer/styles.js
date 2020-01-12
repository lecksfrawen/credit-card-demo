import styled, { css } from "styled-components"
import { Favorite } from "@material-ui/icons"

export const BottomFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;
  display: flex;
`

const containerFluid = css`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`

const container = css`
  ${containerFluid}
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const FooterContainer = styled.div`
  ${container}

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
