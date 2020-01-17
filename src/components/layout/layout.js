/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "styled-components"
import { ThemeProvider as MUIThemeProvider } from "@material-ui/core/styles"

import theme, { GlobalStyle } from "theme"
import Header from "components/Header"
import Footer from "components/Footer"
import { BackgroundContainer, MainContainer } from "./styles"

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
    <MUIThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <BackgroundContainer>
          <MainContainer>{children}</MainContainer>
          <Footer />
        </BackgroundContainer>
      </ThemeProvider>
    </MUIThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
