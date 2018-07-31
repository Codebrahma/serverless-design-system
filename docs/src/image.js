import React from 'react';
import LiveEdit from './LiveEdit';

// Line height is not consistent
const text = `
  <Image
    src="https://serverless.com/_/src/assets/images/facebook.122045691ad327ec8d9806837bcb915d.png"
    width="20px"
    height="20px"
  />
`;

export default () => (
  <div>
    <LiveEdit code={text} />
    props are
    <ul>
      <li>height: string</li>
      <li>space: number</li>
      <li>width: string</li>
    </ul>
  </div>
);
