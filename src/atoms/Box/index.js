import styled from 'styled-components';
import {
  space,
  width,
  height,
  borderColor,
  border,
  maxWidth,
  minWidth,
  minHeight,
  maxHeight,
} from 'styled-system';

const Box = styled.div`
  ${space}
  ${width}
  ${height}
  ${border}
  ${borderColor}
  ${maxWidth}
  ${minWidth}
  ${minHeight}
  ${maxHeight}
`;

Box.displayName = 'Box';

export default Box;
