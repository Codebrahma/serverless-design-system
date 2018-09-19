import styled from 'styled-components';
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  opacity,
} from 'styled-system';
import { align } from './../../customStyleSystem';

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
  ${align}
  ${opacity}
`;

Text.displayName = 'Text';

Text.span = Text.withComponent('span');
Text.p = Text.withComponent('p');
Text.s = Text.withComponent('s');

export default Text;
