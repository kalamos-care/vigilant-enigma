import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import StoreContextProvider from '~/provider/StoreContextProvider'
import FunctionsContextProvider from '~/provider/FunctionsContextProvider'
import Navigation from '~/components/Navigation'
import AppFooter from '~/theme/modules/views/AppFooter';

const Layout = ({ children }) => {
  return (
    <StoreContextProvider>
      <FunctionsContextProvider>
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
              <div>
                {children}
              </div>
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

export default Layout;
