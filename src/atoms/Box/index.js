import styled from 'styled-components';
import {
  space, width, color,
  borderColor, border, display,
  flexWrap, flexDirection,
  alignItems, justifyContent,
  order, position, zIndex,
  top, left, right, bottom,
  maxWidth, minWidth,
  minHeight, maxHeight, bg,
} from 'styled-system';

const overflow = (props) => ({
  overflow: props.o || null,
  overflowX: props.ox || null,
  overflowY: props.oy || null
});

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
  ${maxWidth} ${minWidth} ${minHeight}
  ${maxHeight} ${boxSizing} ${bg}
  ${overflow}
`;

Box.displayName = 'Box';

export default Box;
