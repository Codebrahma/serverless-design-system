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
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  margin: 10px auto;
`


const StyledEditor = styled(LiveEditor)`
  overflow: scroll;
  width: 100%;
`

const StyledPreview = styled(LivePreview)`
  margin-top:10px;
  width: 100%;
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