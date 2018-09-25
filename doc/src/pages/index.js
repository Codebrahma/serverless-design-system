import React from 'react'
import Link from 'gatsby-link'
import AppWrapper from './../components/AppWrapper'
import Section from './../components/Section'

export default () => (
  <AppWrapper>
    <h1>
      Serverless design system <span><code>v0.1</code></span>
    </h1>
    <hr />

    <Section>
      <h2>
        Getting Started
      </h2>
      <p>
        Install the design system in your application, by running the following command
        <br />
        <code>npm install serverless-design-system</code>
      </p>
    </Section>

    <Section>
      <h2>
        Usage
      </h2>
      <p>
        Add `ThemeProvider` in your application. You can also pass theme object as prop to set custom theme.
        <br />
        To know more, <Link to="/theme-provider">check this out.</Link>
      </p>
      <pre>
        <code>
          {
`import { ThemeProvider } from 'serverless-design-system'
export default () => (
  <ThemeProvider>
    { /*  Render the root component */ }
  </ThemeProvider>
)`
          }
        </code>
      </pre>

      <p>
        Importing and using the components in your application
      </p>
      <pre>
        <code>
          {
`import { Box, Image } from 'serverless-design-system'
export default () => (
  <Box m={1}>
    <Image src={logoSource} alt="logo" />
  </Box>
)`
          }
        </code>
      </pre>
    </Section>
  </AppWrapper>
)
