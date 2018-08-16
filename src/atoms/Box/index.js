import styled from 'styled-components';
import {
  color,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  space,
  width,
} from 'styled-system';

const Box = styled.div`
  ${color}
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
