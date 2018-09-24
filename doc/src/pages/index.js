import React from 'react'
import styled from 'styled-components'

const AppWrapper = styled.div`
  margin-top: 25px;

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  span, p {
    font-size: 1.6rem;
  }
`

const Section = styled.div`
  margin-top: 50px;

  code {
    display: block;
    font-size: 1.5rem;
    background: #e9f4ff;
    padding: 15px;

    pre {
      margin: 0px;
    }
  }
`

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
        Importing and using the components in your application
        <br />
        <code>
          <pre>
            {
`import { Box, Image } from 'serverless-design-system'
export default () => (
  <Box m={1}>
    <Image src={logoSource} alt="logo" />
  </Box>
)`
            }
          </pre>
        </code>
      </p>
    </Section>
  </AppWrapper>
)
