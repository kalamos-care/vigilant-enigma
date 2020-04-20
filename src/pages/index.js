import React from 'react'
// import { Link } from 'gatsby'

import SEO from '~/components/seo'
import TestCenterSearch from '~/components/TestCenterSearch'
// import ProductGrid from '~/components/ProductGrid'
// <ProductGrid />

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
    <TestCenterSearch />
  </>
)

export default IndexPage
