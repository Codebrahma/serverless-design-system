import styled from 'styled-components';
import {
  space, width, color,
  borderColor, border, display,
  flexWrap, flexDirection,
  alignItems, justifyContent,
  order, position, zIndex,
  top, left, right, bottom,
  maxWidth, minWidth, backgroundColor
} from 'styled-system';

const boxSizing = (props) => ({
  boxSizing: props.boxSizing || null,
});

const Box = styled.div`
  ${space} ${width} ${color}
  ${border} ${borderColor} ${display}
  ${flexWrap} ${flexDirection}
  ${alignItems} ${justifyContent}
  ${order} ${position} ${zIndex}
  ${top} ${left} ${right} ${bottom}
  ${maxWidth} ${minWidth} ${boxSizing}
  ${backgroundColor}
`;

Box.displayName = 'Box';

export default Box;
