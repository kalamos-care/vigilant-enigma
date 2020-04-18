import React from 'react'
import SEO from '~/components/seo'
import GetTestedForm from '~/components/GetTestedForm';

const GetTestedPage = () => (
  <>
    <SEO title="Get Tested" keywords={[`get tested`]} />
    <h1>Get Tested</h1>
    <GetTestedForm />
  </>
)

export default GetTestedPage
