import React from "react"
import { Grid } from "@material-ui/core"

import Layout from "components/layout"
import SEO from "components/SEO"
import CreditCardFormCard from "components/CreditCardForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8}>
        <CreditCardFormCard />
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
