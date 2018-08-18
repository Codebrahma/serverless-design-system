import styled from 'styled-components';
import { width } from 'styled-system';

import {
  horizontalRuleHeight,
  horizontalRuleColor,
} from './../../customStyleSystem';

const HorizontalRule = styled.div`
  border-top-style: ${({ type }) => type}
  display: block;
  height: 1px;

  ${width}
  ${horizontalRuleColor}
  ${horizontalRuleHeight}
`;

HorizontalRule.defaultProps = {
  type: 'solid',
};

export default HorizontalRule;
