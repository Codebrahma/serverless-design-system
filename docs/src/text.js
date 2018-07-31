import React from 'react';
import LiveEdit from './LiveEdit';

// Line height is not consistent
const text = `
  <Text
    color="text"
    fontSize={2}
    letterSpacing="text"
    lineHeight="1.14em"
    opacity="0.5"
  >
    framework
  </Text>
`;

export default () => (
  <div>
    <LiveEdit code={text} />
    props are
    <ul>
      <li>color: string</li>
      <li>fontFamily: string</li>
      <li>fontSize: number</li>
      <li>fontStyle: string</li>
      <li>fontWeight: string</li>
      <li>letterSpacing: number</li>
      <li>lineHeight: number</li>
    </ul>
  </div>
);
