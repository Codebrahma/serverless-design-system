import styled from 'styled-components';
import {
  space,
  width,
  height,
  color,
  borderColor,
  border,
  display,
  position,
  zIndex,
  top,
  left,
  right,
  bottom,
  maxWidth,
  minWidth,
  minHeight,
  maxHeight,
  bg,
  background,
  boxShadow,
  backgroundSize,
} from 'styled-system';

import { overflow, overflowX, overflowY, bk } from '../../customStyleSystem';

const boxSizing = (props) => ({
  boxSizing: props.boxSizing || null,
});

const Box = styled.div`
  ${space}
  ${width}
  ${height}
  ${color}
  ${border}
  ${borderColor}
  ${display}
  ${position}
  ${zIndex}
  ${top}
  ${left}
  ${right}
  ${bottom}
  ${maxWidth}
  ${minWidth}
  ${minHeight}
  ${maxHeight}
  ${boxSizing}
  ${bg}
  ${background}
  ${boxShadow}
  ${overflow}
  ${overflowX}
  ${overflowY}
  ${background}
  ${backgroundSize}
`;

Box.displayName = 'Box';

export default Box;
