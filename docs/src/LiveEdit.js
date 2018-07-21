import React from 'react'

import {ThemeProvider} from 'styled-components'

import Button from '../../src/Button'
import Testimonial from '../../src/Testimonial'
import theme from '../../src/theme'


import styled, { css } from 'styled-components'


const scope = {styled, React, Button, Testimonial};

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'


const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const column = css`
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`

const StyledEditor = styled(LiveEditor)`
  background: grey;
  font-family: 'Source Code Pro', monospace;
  font-size: 20px;
  height: 500px;
  overflow: scroll;

  ${column}
`

const StyledPreview = styled(LivePreview)`
  ${column}
`

const StyledError = styled(LiveError)`
  display: block;
  padding: 10px;
  background: red;
  color: white;
`

const LiveEdit = ({ code }) => (
  <LiveProvider
    code={code} scope={scope}
  >
    <LiveWrapper style={{width:'100%'}}>
      <StyledEditor style={{width: '30%'}}/>
      <ThemeProvider theme={theme}>
        <StyledPreview style={{width: '70%'}}/>
      </ThemeProvider>
    </LiveWrapper>

    <StyledError />
  </LiveProvider>
)

export default LiveEdit