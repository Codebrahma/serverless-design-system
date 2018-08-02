import styled from 'styled-components';
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  width,
} from 'styled-system';

const fontStyle = props => ({
  fontStyle: props.fontStyle ? props.fontStyle : null,
});

const boxSizing = props => ({
  boxSizing: props.boxSizing ? props.boxSizing : null,
});

const border = props => ({
  border: props.border ? props.border : null,
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
  ${width}
  ${boxSizing}
  ${border}
`;

export default TextField;
