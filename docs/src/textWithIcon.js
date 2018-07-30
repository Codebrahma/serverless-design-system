import React from 'react';
import LiveEdit from './LiveEdit';

const textWithIcon = `
<TextWithIcon
iconSrc='https://serverless.com/_/src/assets/images/dot-grid.ab343e1fdd716b7b80c667bc9eaeeb0d.png' iconHeight="20px" iconWidth="25px" iconTop="-6px">
  <Heading>Sample Heading</Heading>
</TextWithIcon>
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
