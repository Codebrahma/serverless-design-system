import React from 'react'

import {ThemeProvider} from 'styled-components'

import Button from '../../src/Button'
import Testimonial from '../../src/Testimonial'
import Benefit from '../../src/Benefit';
import MainHeader from '../../src/MainHeader';
import theme from '../../src/theme'


import styled from 'styled-components'


const scope = {styled, React, Button, Testimonial, Benefit,MainHeader};

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
  flex-wrap: wrap;
`


const StyledEditor = styled(LiveEditor)`
  font-size: 20px;
  overflow: scroll;
  width: 100%;
`

const StyledPreview = styled(LivePreview)`
  margin: 0px;
  margin-top: 20px;
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