import styled from 'styled-components';
import { ListItem } from '../../atoms';

export default styled(ListItem)`
  display: block;
  padding-right: ${props => props.theme.space[1]}px;
  padding-bottom: ${props => props.theme.space[2]}px;
  font-size: ${props => props.theme.fontSizes[1]}px;
  letter-spacing: ${props => props.theme.letterSpacings.text};
  line-height: '1.14';
`;