import React from "react"
import { BottomFooter, FooterContainer, HeartIcon } from "./styles"

const Footer = () => {
  return (
    <BottomFooter>
      <FooterContainer>
        <div className="createdBy">
          &copy; {1900 + new Date().getYear()} , made with <HeartIcon /> by{" "}
          <a
            href="https://www.linkedin.com/in/ernestorr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ernesto Ramirez
          </a>
        </div>
      </FooterContainer>
    </BottomFooter>
  )
}

export default Footer
