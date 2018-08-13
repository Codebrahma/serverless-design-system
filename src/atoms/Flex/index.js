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

Flex.spaceBetween = styled(Flex)`
  justify-content: space-between;
`;

Flex.horizontallyCenter = styled(Flex)`
  justify-content: center;
`;

Flex.verticallyCenter = styled(Flex)`
  align-items: center;
`;

Flex.center = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

Flex.column = styled(Flex)`
  flex-direction: column;
`;

Flex.row = styled(Flex)`
  flex-direction: row;
`;

export default Flex;
