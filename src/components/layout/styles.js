import styled from "styled-components"
import bg from "./bg7.jpg"
import { MediaQueryContainerCss } from "theme"

export const BackgroundContainer = styled.div`
  position: relative;
  height: auto;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  align-items: center;

  background-image: url(${bg});
  background-size: cover;
  background-position: center top;
`

export const MainContainer = styled.main`
  ${MediaQueryContainerCss}

  color: #ffffff;
  width: 100%;
  height: 100vh;
  z-index: 2;
  position: relative;

  margin-left: auto;
  margin-right: auto;
  padding: 20vh 15px 200px 15px;
`
