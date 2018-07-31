import styled from 'styled-components';
import {
  border,
  borderColor,
  color,
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  maxWidth,
  order,
  space,
  width,
}
  from 'styled-system';

const Box = styled.div`
  ${border}
  ${borderColor}
  ${color} 
  ${display}
  ${flexDirection} 
  ${flexWrap}
  ${justifyContent}
  ${maxWidth}
  ${order}
  ${space}
  ${width}
`;

Box.displayName = 'Box';

export default Box;
