import React from 'react';
import LiveEdit from './LiveEdit';

const header = `
  <Header
    logo={
      <Logo
        src='https://serverless.com/_/src/assets/images/logo.ce91bef30d19103f7a9be878a9b44465.png'
        height="30px"
        width="170px"
        alt="Serverless"
      />
    }
    menu={[
      {name: 'platform'},
      {name: 'developers'},
      {name: 'learn'},
      {name: 'resources'},
      {name: 'enterprise'},
    ]}
  />
`;

export default class extends React.Component {
  render() {
    return (
      <div>
        <LiveEdit code={header} />
      </div>
    );
  }
}
