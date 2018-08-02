import React from 'react';
import LiveEdit from './LiveEdit';

// Line height is not consistent
const text = `
  <Flex>
    <Box>framework</Box>
    <Box>dashboard</Box>
    <Box>event gateway</Box>
    <Box>enterprise</Box>
  </Flex>
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
