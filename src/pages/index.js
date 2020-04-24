import React from 'react'
// importing grid styles...
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { Link } from 'gatsby'

import SEO from '~/components/seo'
import TestCenterSearch from '~/components/TestCenterSearch'
// import ProductGrid from '~/components/ProductGrid'
// <ProductGrid />

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>LOVE CAN BE COMPLICATED.<br />DON'T WORRY, WE GET IT.</h1>
    <h3>Kalamos is here to help you better protect yourself and your community.</h3>
    <p>Need to get tested? Start by entering your zipcode below.</p>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
 <h2>show shopify product here</h2>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TestCenterSearch />
      </Grid>
    </Grid>


  </>
)

export default IndexPage
