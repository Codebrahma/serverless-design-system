import React from 'react'

import {ThemeProvider} from 'styled-components'

import Button from '../../src/Button'
import Testimonial from '../../src/Testimonial'
import Benefit from '../../src/Benefit';
import theme from '../../src/theme'


import styled from 'styled-components'


const scope = {styled, React, Button, Testimonial, Benefit};

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'


const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%
`


const StyledEditor = styled(LiveEditor)`
  font-size: 20px;
  overflow: scroll;
  width: 30%;
`

const StyledPreview = styled(LivePreview)`
  width: 70%;
`

const LiveEdit = ({ code }) => (
  <LiveProvider
    code={code} scope={scope}
  >
    <LiveWrapper>
      <StyledEditor/>
      <ThemeProvider theme={theme}>
        <StyledPreview/>
      </ThemeProvider>
    </LiveWrapper>
  </LiveProvider>
)

export default LiveEdit