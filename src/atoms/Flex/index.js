import styled from 'styled-components';
import Box from './../Box';
import {
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent,
  order,
} from 'styled-system';

const Flex = styled(Box).attrs({
  display: 'flex'
})`
  ${alignItems}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${order}
`;

export default Flex;
