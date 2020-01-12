/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"

import theme, { GlobalStyle } from "theme"
import Header from "components/Header"
import Footer from "components/Footer"
import { BackgroundContainer } from "./styles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* <div
        style={{
          //   margin: `0 auto`,
          //   maxWidth: 960,
          //   padding: `0px 1.0875rem 1.45rem`,
          height: "100vh",
        }}
      > */}
      <BackgroundContainer>
        <main>{children}</main>
        <Footer />
      </BackgroundContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
