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
  backgroundImage
} from 'styled-system';

import {
  overflow,
  overflowX,
  overflowY,
  transition
} from '../../customStyleSystem';

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
  ${backgroundSize}
  ${backgroundImage}
  ${transition}
`;

Box.displayName = 'Box';

Box.relative = styled(Box)`
  position: relative;
`;

Box.absolute = styled(Box)`
  position: absolute;
`;

Box.fixed = styled(Box)`
  position: fixed;
`;

export default Box;
