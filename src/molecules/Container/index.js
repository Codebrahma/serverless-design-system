import styled from 'styled-components';
import { space, width, minWidth, maxWidth } from 'styled-system';

import { Box } from '../../atoms';

const Container = styled(Box)`
  ${space}
  ${width}
  ${minWidth}
  ${maxWidth}
`;

Container.defaultProps = {
  m: 'auto',
  maxWidth: [1, 1, 1, '1260px', '1260px']
};

export default Container;
