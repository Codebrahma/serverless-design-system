import styled from 'styled-components';
import { space, display } from 'styled-system';

import { styleType } from './../../customStyleSystem';

const List = styled.ul`
  ${space}
`;

const ListItem = styled.li`
  ${space}
  ${display}
  ${styleType}
`;

ListItem.noStyleType = styled(ListItem)`
  list-style-type: none;
`;

export {
  List,
  ListItem
};
