import React from 'react'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import {ThemeProvider} from 'styled-components'

import Button from '../../src/Button'
import Testimonial from '../../src/Testimonial'
import theme from '../../src/theme'



import styled from 'styled-components';

const scope = {styled, React, Button, Testimonial};

const Demo = ({comp})=>{
  return(
    <LiveProvider code={comp} scope={scope}>
      <div style={{display: 'flex'}}>
        <LiveEditor className='le' style={{width: '50%'}}/>
        <LiveError />
        <ThemeProvider theme={theme}>
          <LivePreview />
        </ThemeProvider>
      </div>
    </LiveProvider>
  )
}

export default Demo;