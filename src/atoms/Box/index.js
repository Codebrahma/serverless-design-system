import styled from 'styled-components';
import {
  space, width, height, color,
  borderColor, border, display,
  flexWrap, flexDirection,
  alignItems, justifyContent,
  order, position, zIndex,
  top, left, right, bottom,
  maxWidth, minWidth,
  minHeight, maxHeight, bg,
} from 'styled-system';

import { overflow, overflowX, overflowY } from '../../customStyleSystem';

const boxSizing = (props) => ({
  boxSizing: props.boxSizing || null,
});

const Box = styled.div`
  ${space} ${width} ${height} ${color}
  ${border} ${borderColor} ${display}
  ${flexWrap} ${flexDirection}
  ${alignItems} ${justifyContent}
  ${order} ${position} ${zIndex}
  ${top} ${left} ${right} ${bottom}
  ${maxWidth} ${minWidth} ${minHeight}
  ${maxHeight} ${boxSizing} ${bg}
  ${overflow} ${overflowX} ${overflowY}
`;

Box.displayName = 'Box';

export default Box;
