import styled from 'styled-components';
import {
  color,
  display,
  space,
  height,
  maxHeight,
  minHeight,
  width,
  maxWidth,
  minWidth,
} from 'styled-system';

const Box = styled.div`
  ${color}
  ${display}
  ${height}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${space}
  ${width}
`;

Box.displayName = 'Box';

export default Box;
