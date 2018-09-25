import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'

import Sidebar from './../components/Sidebar'
import { AppWrapper, Wrapper, Content } from './default';

const Layout = ({ children, data, ...props }) => (
  <AppWrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      bodyAttributes={{ class: 'body-wrapper' }}
    />
    <Wrapper>
      <Sidebar
        data={data.allMarkdownRemark}
        path={props.location.pathname}
      />
      <Content>
        { children({ ...props }) }
      </Content>
    </Wrapper>
  </AppWrapper>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            component
            type
          }
        }
      }
    }
  }
`;
