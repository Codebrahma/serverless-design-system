import React from 'react';
import LiveEdit from './LiveEdit';

const trustedclient = `
<TrustedClients />
`;

export default () => (
  <div>
    <LiveEdit code={trustedclient} />
    Props are
    <ul>
      <li>secondary</li>
      <li>disabled</li>
    </ul>
  </div>
);
