import styled from 'styled-components';
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
} from 'styled-system';

const fontStyle = props => ({
  fontStyle: props.fontStyle || null,
});

const Text = styled.div`
  ${color}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${space}
`;

Text.displayName = 'Text';

Text.h1 = Text.withComponent('h1');
Text.h2 = Text.withComponent('h2');
Text.h3 = Text.withComponent('h3');
Text.h4 = Text.withComponent('h4');
Text.h5 = Text.withComponent('h5');
Text.h6 = Text.withComponent('h6');
Text.span = Text.withComponent('span');
Text.p = Text.withComponent('p');
Text.s = Text.withComponent('s');

export default Text;
