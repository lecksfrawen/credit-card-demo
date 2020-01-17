import React from "react"
import Link from "@material-ui/core/Link"
import { BottomFooter, FooterContainer, HeartIcon } from "./styles"

const Footer = () => {
  return (
    <BottomFooter>
      <FooterContainer>
        <div className="createdBy">
          &copy; {1900 + new Date().getYear()} , made with <HeartIcon /> by{" "}
          <Link
            href="https://www.linkedin.com/in/ernestorr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ernesto Ramirez
          </Link>
        </div>
      </FooterContainer>
    </BottomFooter>
  )
}

export default Footer
