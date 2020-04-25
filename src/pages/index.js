import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"
import Hero from '../theme/modules/views/Hero';
import VerticalCTA from '../theme/modules/views/VerticalCTA';
import ProductCTA from '../theme/modules/views/ProductCTA';
import SEO from '~/components/seo'
import TestCenterSearch from '~/components/TestCenterSearch'
// import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      shopifyProduct(handle: {eq: "prep-starter-screening-kit"}) {
        id
        description
        title
        handle
        images {
          originalSrc
          id
          localFile {
            childImageSharp {
              fluid(maxWidth: 910) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `);
  const { shopifyProduct } = data;
  const [ productHeroImage ] = shopifyProduct.images;

  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero
        title={() => <>LOVE CAN BE COMPLICATED.<br />DON'T WORRY, WE GET IT.</>}
        description="Kalamos is here to help you better protect yourself and your community."
        disclaimer="Need to get tested? You can purchase a kit to collect your samples at home or find a local testing center by entering your zipcode below."
        ctaLeft={{ text: 'Buy a Kit', link: '#buyakit' }}
        ctaRight={{ text: 'Find a Clinic', link: '#findaclinic' }}
      />
      <div id="buyakit" />
      <ProductCTA
        title="Get Tested at Home"
        description={[
          "Molecular Testing Labs is the nation's leading lab for dried blood diagnostics. That means you can collect your own blood samples from anywhere.",
          "In your kit, you will find a dried blood card, safety lances, alcohol pads, band-aids and all the necessary registration information.",
          "Once you receive the kit, head over to your registration site and select the tests you want!"
        ]}
        disclaimer="*additional fees required for testing.**not available in New York."
        ctaLeft={{ text: 'Buy', link: `/product/${shopifyProduct.handle}` }}
        ctaRight={{ text: 'Learn More', link: '' }}
        image={<Img fluid={productHeroImage.localFile.childImageSharp.fluid} alt={shopifyProduct.title}/>}
      />
      {/* <ProductGrid /> */}
      <div id="findaclinic" />
      <TestCenterSearch />
      <VerticalCTA />
    </>
  );
}

export default IndexPage
