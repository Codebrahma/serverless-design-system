import styled from 'styled-components';
import Box from './../Box';
import {
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent,
  order,
} from 'styled-system';

const Flex = styled(Box)`
  display: flex;

  ${alignItems}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${order}
`;

Flex.relative = styled(Flex)`
  position: relative;
`;

Flex.absolute = styled(Flex)`
  position: absolute;
`;

Flex.fixed = styled(Flex)`
  position: fixed;
`;

export default Flex;
