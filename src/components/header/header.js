import React from "react"
import PropTypes from "prop-types"
import { Typography } from "@material-ui/core"
import { Link } from "gatsby"

import { AppBarTransparent, ToolbarMediaQuery } from "./styles"

const Header = ({ siteTitle }) => (
  <AppBarTransparent position="static">
    <ToolbarMediaQuery>
      <Typography
        variant="h6"
        component={Link}
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Typography>
    </ToolbarMediaQuery>
  </AppBarTransparent>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
