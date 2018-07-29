import React from 'react'
import LiveEdit from './LiveEdit'
const button = `
<Button>
  Serverless
</Button>
`;
  const secondary = `
<Button secondary>
  Serverless
</Button>
  `;

export default class extends React.Component {
  render(){
    return (
      <div>
      <LiveEdit code={button}/>
      <LiveEdit code={secondary}/>
      Props are
      <ul>
        <li>secondary</li>
        <li>disabled</li>
      </ul>
      </div>
    )
  }
}