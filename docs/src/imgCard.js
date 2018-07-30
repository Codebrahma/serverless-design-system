import React from 'react';
import LiveEdit from './LiveEdit';

const imageCard = `
<ImgCard 
img='http://serverless.com/_/src/assets/images/icon-vol.7c3dccb3d95994d2b3d5d7920b429b27.png'
title='Automatic Scaling'
description='Forget about provisioning & managing your server fleet. Serverless applications scale with demand'
/>
`;

export default class extends React.Component {
  render() {
    return (
      <div>
        <LiveEdit code={imageCard} />
      Props are
        <ul>
          <li>Image</li>
          <li>Title</li>
          <li>Description</li>
        </ul>
      </div>
    );
  }
}
