import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal, ThemeProvider } from 'styled-components';


/* eslint no-unused-expressions: off */
// injectGlobal`
//   body {
//     background: ${theme.colors.bg};
//     color: ${theme.colors.color};
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }

//   a {
//     color: ${theme.colors.link};
//     transition: color .5s;
//     text-decoration: none;
//   }

//   a:hover {
//     text-decoration: none;
//     color: ${theme.colors.linkHover};
//   }

//   .gatsby-resp-image-wrapper {
//     margin: 2.75rem 0;
//   }
// `;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={{}}>
    <React.Fragment>
      {children()}
    </React.Fragment>
  </ThemeProvider>
);

export default TemplateWrapper;
