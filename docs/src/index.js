import React from 'react'
import Button from '../../src/Button'
import Playground from 'component-playground'

export default class extends React.Component {
  


  render(){

  const button = `
    <Button>
      hi
    </Button>
  `;
  const secondary = `
    <Button secondary>
      hi
    </Button>
  `;
    return(
      <React.Fragment>
        <head>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css"/>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/theme/monokai.min.css"/>
        </head>
      <div className="component-documentation">
        <Playground codeText={button} scope={{React: React, Button: Button}}/>
        <Playground codeText={secondary} scope={{React: React, Button: Button}}/>
      </div>
      </React.Fragment>
    );
  }
}