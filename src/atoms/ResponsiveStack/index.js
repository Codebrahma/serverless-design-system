import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { flexDirection } from 'styled-system';

import Flex from './../Flex';

const ResponsiveStack = styled(Flex)`
  ${flexDirection}
`;

ResponsiveStack.relative = styled(ResponsiveStack)`
  position: relative;
`;

ResponsiveStack.absolute = styled(ResponsiveStack)`
  position: absolute;
`;

ResponsiveStack.fixed = styled(ResponsiveStack)`
  position: fixed;
`;

ResponsiveStack.spaceBetween = styled(ResponsiveStack)`
  justify-content: space-between;
`;

ResponsiveStack.horizontallyCenter = styled(ResponsiveStack)`
  justify-content: center;
`;

ResponsiveStack.verticallyCenter = styled(ResponsiveStack)`
  align-items: center;
`;

ResponsiveStack.center = styled(ResponsiveStack)`
  justify-content: center;
  align-items: center;
`;

ResponsiveStack.propTypes = {
  flexDirection: PropTypes.array,
};

ResponsiveStack.defaultProps = {
  flexDirection: ['column', 'column', 'row'],
};

export default ResponsiveStack;
