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

// lineHeight is inconsistent
const footer = (props) => {
  if (props.footer) {
    return {
      display: 'block',
      paddingRight: `${props.theme.space[1]}px`,
      paddingBottom: `${props.theme.space[2]}px`,
      fontSize: `${props.theme.fontSizes[1]}px`,
      letterSpacing: `${props.theme.letterSpacings.text}`,
      lineHeight: '1.14',
    };
  }
  return null;
};

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
  ${footer}
`;

export default ListItem;
