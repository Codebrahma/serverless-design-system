import styled from 'styled-components';
import { space, display } from 'styled-system';

const List = styled.ul`
  ${space}
`;

const ListItem = styled.li`
  ${space}
  ${display}
`;

ListItem.noStyleType = styled(ListItem)`
  list-style-type: none;
`;

export {
  List,
  ListItem
};
