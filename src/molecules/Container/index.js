import styled from 'styled-components';
import {
  space,
  width,
  minWidth,
  maxWidth,
} from 'styled-system';

import { Box } from '../../atoms';

const Container = styled(Box)`
  ${space}
  ${width}
  ${minWidth}
  ${maxWidth}
`;

Container.defaultProps = {
  m: 'auto',
  maxWidth: [0, 0, 0, 1],
};

export default Container;
