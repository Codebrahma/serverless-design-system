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

import { boxSizing } from '../../customStyleSystem';

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
  ${boxSizing}
`;

Box.defaultProps = {
  boxSizing: 'border-box',
};

Box.displayName = 'Box';

export default Box;
