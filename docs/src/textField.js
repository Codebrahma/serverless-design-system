import React from 'react';
import LiveEdit from './LiveEdit';

// Padding is not consistent
const textfield = `
  <TextField
    color="dark.blue"
    fontSize={3}
    letterSpacing="textField"
    lineHeight={4}
    opacity="0.2"
    placeholder="email address"
    pb="15px"
    pt="11px"
    px="24px"
  />
`;

export default () => (
  <div>
    <LiveEdit code={textfield} />
    props are
    <ul>
      <li>color: string</li>
      <li>fontFamily: string</li>
      <li>fontSize: number</li>
      <li>fontStyle: string</li>
      <li>fontWeight: string</li>
      <li>letterSpacing: number</li>
      <li>lineHeight: number</li>
      <li>space: number</li>
    </ul>
  </div>
);