import React from 'react';
import LiveEdit from './src/LiveEdit';

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

export default () => (
  <div>
    <LiveEdit code={button} />
    <LiveEdit code={secondary} />
    Props are
    <ul>
      <li>secondary</li>
      <li>disabled</li>
    </ul>
  </div>
);
