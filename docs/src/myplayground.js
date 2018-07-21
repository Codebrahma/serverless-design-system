import React from 'react'
import ReactPlaygroundStyled from 'react-playground-styled'
import styled from 'styled-components'

import Button from '../../src/Button'
import Testimonial from '../../src/Testimonial'

import theme from '../../src/theme'
import {ThemeBroadcast} from 'react-playground-styled'

const themeBroadcast = new ThemeBroadcast(theme)
const scope={Button, Testimonial, theme};

const MyPlayground = props => {
  return (
    <ReactPlaygroundStyled
      scope={scope}
      themeBroadcast={themeBroadcast}
      loadTheme="monokai"
      backgroundColor=""
      playgroundWrapper={
        Wrapper => styled(Wrapper)`
          flex-direction: row-reverse;
          `
      }
      defaultValue={props.defaultValue}
    />
  )
};

export {MyPlayground};