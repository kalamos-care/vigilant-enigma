import React from 'react'
// import { Link } from 'gatsby'

import SEO from '~/components/seo'
import TestCenterSearch from '~/components/TestCenterSearch'
// import ProductGrid from '~/components/ProductGrid'
// <ProductGrid />

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>LOVE CAN BE COMPLICATED.<br />DON'T WORRY, WE GET IT.</h1>
    <h3>Kalamos is here to help you better protect yourself and your community.</h3>
    <p>Need to get tested? Start by entering your zipcode below.</p>
    <TestCenterSearch />
  </>
)

export default IndexPage
