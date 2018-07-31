import styled from 'styled-components';
import {
  alignItems,
  border,
  borderColor,
  color,
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  order,
  space,
  width,
} from 'styled-system';

const ListItem = styled.li`
  ${alignItems}
  ${border}
  ${borderColor}
  ${color}
  ${display}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${order}
  ${space}
  ${width}
`;

export default ListItem;
