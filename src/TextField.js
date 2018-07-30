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
  fontStyle: props.fontStyle ? props.fontStyle : null,
});

const TextField = styled.input`
  ${color}
  ${fontFamily} 
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${space}
`;

TextField.displayName = 'TextField';

export default TextField;
