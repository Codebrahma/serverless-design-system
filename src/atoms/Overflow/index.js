import styled from 'styled-components';
import {
  overflow,
  overflowX,
  overflowY,
} from './../../customStyleSystem';

import Box from './../Box';

const Overflow = styled(Box)`
  ${overflow}
  ${overflowX}
  ${overflowY}
`;

Overflow.displayName = 'Overflow';

export default Overflow;
