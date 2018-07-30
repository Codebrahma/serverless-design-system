import React from 'react';
import LiveEdit from './LiveEdit';

// Line height is not consistent
const text = `
  <List>
    <ListItem footer>framework</ListItem>
    <ListItem footer>dashboard</ListItem>
    <ListItem footer>event gateway</ListItem>
    <ListItem footer>enterprise</ListItem>
  </List>
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
