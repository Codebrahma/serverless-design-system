import React from 'react';
import LiveEdit from './LiveEdit';

const testimonial = `
<Testimonial
  img="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cocacola-logo.png"
  name="Patrick Brandt"
  designation="Solutions Architect at The Coca Cola Company"
  alt="Coca Cola"
>
"The Serverless Framework is a core component of The Coca-Cola Company's initiative to reduce IT operational costs and deploy services faster."
</Testimonial>
`;

export default () => (
  <div>
    <LiveEdit code={testimonial} />
      props are
    <ul>
      <li>image : url </li>
      <li>name : string</li>
      <li>designation: string</li>
      <li>alt : string</li>
      <li>For the child element pass on the testimonial</li>
    </ul>
  </div>
);
