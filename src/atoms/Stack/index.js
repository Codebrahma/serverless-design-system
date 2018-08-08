import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { flexDirection } from 'styled-system';

import Flex from './../Flex';

const Stack = styled(Flex)`
  ${flexDirection}
`;

Stack.relative = styled(Stack)`
  position: relative;
`;

Stack.absolute = styled(Stack)`
  position: absolute;
`;

Stack.fixed = styled(Stack)`
  position: fixed;
`;

Stack.spaceBetween = styled(Stack)`
  justify-content: space-between;
`;

Stack.horizontallyCenter = styled(Stack)`
  justify-content: center;
`;

Stack.verticallyCenter = styled(Stack)`
  align-items: center;
`;

Stack.center = styled(Stack)`
  justify-content: center;
  align-items: center;
`;

Stack.propTypes = {
  flexDirection: PropTypes.array,
};

Stack.defaultProps = {
  flexDirection: ['column', 'column', 'row'],
};

export default Stack;
