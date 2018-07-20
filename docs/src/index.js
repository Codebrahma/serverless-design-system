import React from 'react'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import Button from '../../src/Button'
const scope = {Button}
export default class extends React.Component {
  
  render(){
    return(
      <LiveProvider code="<Button>Serverless</Button>"
        scope={scope}
      >
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }
}