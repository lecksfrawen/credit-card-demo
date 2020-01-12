import React from "react"
import PropTypes from "prop-types"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <AppBar position="static">
    <Toolbar>
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
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
