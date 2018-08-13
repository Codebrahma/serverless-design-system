import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'

import { AppWrapper, Wrapper } from './default';

const Layout = ({ children, data, ...props }) => (
  <AppWrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      bodyAttributes={{
        class: 'body-wrapper',
      }}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children({ ...props })}
  </AppWrapper>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
