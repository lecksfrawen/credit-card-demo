import styled from "styled-components"
import bg from "./bg7.jpg"

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

  /* backgroundImage: url(" + image + "), */
  /* backgroundSize: "cover", */
  /* backgroundPosition: "top center" */

  > main {
    padding-top: 20vh;
  }
`
