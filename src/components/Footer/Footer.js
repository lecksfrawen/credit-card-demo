import React from "react"
import { Favorite } from "@material-ui/icons"
import { BottomFooter } from "./styles"

const Footer = () => {
  return (
    <BottomFooter>
      &copy; {1900 + new Date().getYear()} , made with <Favorite />
      <a href="https://www.linkedin.com/in/ernestorr/" target="_blank">
        Ernesto Ramirez
      </a>
    </BottomFooter>
  )
}

export default Footer
