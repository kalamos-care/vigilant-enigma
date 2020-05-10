import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import StoreContextProvider from '~/provider/StoreContextProvider'
import FunctionsContextProvider from '~/provider/FunctionsContextProvider'
import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import withRoot from '~/theme/modules/withRoot';
import AppFooter from '~/theme/modules/views/AppFooter';

const Wrapper = styled.div``;

const Layout = ({ children }) => {
  return (
    <StoreContextProvider>
      <FunctionsContextProvider>
        <GlobalStyle />
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                  menuLinks {
                    name
                    link
                  }
                }
              }
            }
          `}
          render={data => (
            <>
              <Navigation
                siteTitle={data.site.siteMetadata.title}
                menuLinks={data.site.siteMetadata.menuLinks}
              />
              <Wrapper>
                {children}
              </Wrapper>
              <AppFooter siteTitle={data.site.siteMetadata.title} />
            </>
          )}
        />
      </FunctionsContextProvider>
    </StoreContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withRoot(Layout)
