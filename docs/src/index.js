import React from 'react'
import Button from '../../src/Button'
import Playground from 'component-playground'

export default class extends React.Component {
  render(){
  const button = `
    <Button>
      Serverless
    </Button>
  `;
  const secondary = `
    <Button secondary>
      Rocks
    </Button>
  `;
    return(
      <div className="component-documentation">
        <Playground codeText={button} scope={{React: React, Button: Button}}/>
        <Playground codeText={secondary} scope={{React: React, Button: Button}}/>
      </div>
    );
  }
}