import styled from 'styled-components';
import { top, left, right, bottom, zIndex } from 'styled-system'

import Box from './../box';

export default styled(Box)`
  position: relative;

  ${top}
  ${left}
  ${right}
  ${bottom}
  ${zIndex}
`;
