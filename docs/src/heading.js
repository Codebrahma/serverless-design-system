import React from 'react';
import LiveEdit from './LiveEdit';

const h1 = `
<div>
<Heading.h1>Serverless</Heading.h1>
<Heading.h2>Serverless</Heading.h2>
<Heading.h3>Serverless</Heading.h3>
<Heading.h4>Serverless</Heading.h4>
<Heading.h5>Serverless</Heading.h5>
<Heading.h6>Serverless</Heading.h6>
</div>`;

export default class extends React.Component {
  render() {
    return (
      <div>
        <LiveEdit code={h1} />
        Props are
        <ul>
          <li />
        </ul>
      </div>
    );
  }
}
