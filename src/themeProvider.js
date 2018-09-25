import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const CustomThemeProvider = (props) => (
  <ThemeProvider {...props} />
)

CustomThemeProvider.defaultProps = { theme }

export default CustomThemeProvider
