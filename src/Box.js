import styled from 'styled-components';
import {
  space, width, color,
  borderColor, border, display,
  flexWrap, flexDirection,
  alignItems, justifyContent,
  order, position, zIndex,
  top, left, right, bottom,
  maxWidth,
} from 'styled-system';

const Box = styled.div`
  ${space} ${width} ${color}
  ${border} ${borderColor} ${display}
  ${flexWrap} ${flexDirection}
  ${alignItems} ${justifyContent}
  ${order} ${position} ${zIndex}
  ${top} ${left} ${right} ${bottom}
  ${maxWidth}

  background-color: ${(props) => props.backgroundColor}
`;

Box.displayName = 'Box';

export default Box;
