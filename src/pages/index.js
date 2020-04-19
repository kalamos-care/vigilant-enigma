import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import RegisterKitForm from '~/theme/modules/views/RegisterKitForm';
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
    <ProductGrid />
  </>
)

export default IndexPage
