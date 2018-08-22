import styled from 'styled-components';
import {
  border,
  borderLeft,
  borderRight,
  borderTop,
  borderBottom,
  borderStyle,
  borderWidth,
  borderColor,
  borderRadius,
  boxShadow,
} from 'styled-system';

import Box from './../Box';

const Card = styled(Box)`
  ${border}
  ${borderLeft}
  ${borderRight}
  ${borderTop}
  ${borderBottom}
  ${borderStyle}
  ${borderWidth}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
`;

Card.displayName = 'Card';

export default Card;
