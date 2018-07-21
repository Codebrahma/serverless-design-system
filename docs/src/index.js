import React from 'react'
import Button from '../../src/Button'
import Testimonial from '../../src/Testimonial'
import Playground from 'component-playground'
import theme from '../../src/theme'
import {ThemeProvider} from 'styled-components'

export default class extends React.Component {
  render(){
  const button = `
  <ThemeProvider theme={theme}>
    <Button>
      Serverless
    </Button>
  </ThemeProvider>
  `;
  const secondary = `
  <ThemeProvider theme={theme}>
    <Button secondary>
      Serverless
    </Button>
  </ThemeProvider>
  `;

  const testimonial = `
  <ThemeProvider theme={theme}>
  <Testimonial 
      img="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cocacola-logo.png"
      name="Patrick Brandt"
      designation="Solutions Architect at The Coca Cola Company"
    >
    "The Serverless Framework is a core component of The Coca-Cola Company's initiative to reduce IT operational costs and deploy services faster."
    </Testimonial>
  </ThemeProvider>
  `
    return(
      <div className="component-documentation">
          <Playground codeText={button} scope={{React: React, Button: Button, ThemeProvider: ThemeProvider, theme: theme}}/>
          <Playground codeText={secondary} scope={{React: React, Button: Button, ThemeProvider: ThemeProvider,theme: theme}}/>
          <Playground codeText={testimonial} scope={{React: React, Testimonial: Testimonial, ThemeProvider: ThemeProvider,theme: theme}}/>
      </div>
    );
  }
}