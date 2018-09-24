import React from 'react'
import styled from 'styled-components'

const AppWrapper = styled.div`
  margin-top: 25px;

  h1 {
    font-size: 3rem;
  }

  span {
    font-size: 1.6rem;
  }
`

export default () => (
  <AppWrapper>
    <h1>
      Serverless design system <span><code>v1.0</code></span>
    </h1>
  </AppWrapper>
)
