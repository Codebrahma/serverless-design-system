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
  maxWidth,
  position,
  top
} from 'styled-system';

const boxSizing = (props) => ({
  boxSizing: props.boxSizing || null,
});

const List = styled.div`
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
  ${maxWidth}
  ${boxSizing}
  ${position}
  ${top}
`;

export default List;
