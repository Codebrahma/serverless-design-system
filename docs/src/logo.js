import React from 'react';
import LiveEdit from './LiveEdit';

const logo = `
<div>
  <Box bg="black" px={4} py={4}>
    <Logo
      src='https://serverless.com/_/src/assets/images/logo.ce91bef30d19103f7a9be878a9b44465.png'
      height="30px"
      width="170px"
      alt="Serverless"
    />
  </Box>
</div>
`;

export default class extends React.Component {
  render() {
    return (
      <div>
        <LiveEdit code={logo} />
      </div>
    );
  }
}
