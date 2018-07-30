import React from 'react';
import LiveEdit from './LiveEdit';

const textWithIcon = `
<div>
  <TextWithIcon
  iconSrc='https://serverless.com/_/src/assets/images/dot-grid.ab343e1fdd716b7b80c667bc9eaeeb0d.png' iconHeight="32px" iconWidth="50px" iconTop="20px">
    <Heading.h1>Sample Heading</Heading.h1>
  </TextWithIcon>
  <TextWithIcon
  iconSrc='https://serverless.com/_/src/assets/images/dot-grid.ab343e1fdd716b7b80c667bc9eaeeb0d.png' iconHeight="28px" iconWidth="40px" iconTop="10px">
    <Heading.h2>Sample Heading</Heading.h2>
  </TextWithIcon>
  <TextWithIcon
    iconSrc='https://serverless.com/_/src/assets/images/dot-grid.ab343e1fdd716b7b80c667bc9eaeeb0d.png' iconHeight="24px" iconWidth="30px" iconTop="5px">
    <Heading.h3>Sample Heading</Heading.h3>
  </TextWithIcon>
  <TextWithIcon
    iconSrc='https://serverless.com/_/src/assets/images/dot-grid.ab343e1fdd716b7b80c667bc9eaeeb0d.png' iconHeight="20px" iconWidth="25px" iconTop="0">
    <Heading.h4>Sample Heading</Heading.h4>
  </TextWithIcon>
  <TextWithIcon
    iconSrc='https://serverless.com/_/src/assets/images/dot-grid.ab343e1fdd716b7b80c667bc9eaeeb0d.png' iconHeight="20px" iconWidth="25px" iconTop="-4px">
    <Heading.h5>Sample Heading</Heading.h5>
  </TextWithIcon>
  <TextWithIcon
    iconSrc='https://serverless.com/_/src/assets/images/dot-grid.ab343e1fdd716b7b80c667bc9eaeeb0d.png' iconHeight="20px" iconWidth="25px" iconTop="-8px">
    <Heading.h6>Sample Heading</Heading.h6>
  </TextWithIcon>
</div>
`;

export default class extends React.Component {
  render() {
    return (
      <div>
        <LiveEdit code={textWithIcon} />
      </div>
    );
  }
}
