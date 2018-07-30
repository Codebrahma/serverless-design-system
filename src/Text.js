import styled from 'styled-components';
import { space, fontFamily, fontWeight,
  fontSize, lineHeight, letterSpacing, color, textAlign } from 'styled-system';

const fontStyle = props => ({
  fontStyle: props.fontStyle ? props.fontStyle : null,
});

const Text = styled.div`
  ${fontFamily} ${fontWeight} ${fontSize} ${fontStyle}
  ${lineHeight} ${letterSpacing}
  ${space} ${color} ${textAlign}
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
