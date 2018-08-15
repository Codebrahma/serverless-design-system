import React from 'react';
import styled from 'styled-components';
import {
  space,
  background,
  backgroundImage,
  backgroundSize,
} from 'styled-system';
import PropTypes from 'prop-types';

import { Box } from '../../atoms';
import Container from '../Container';

const BoxedContainer = ({ className, children, maxWidth }) => (
  <Box
    className={className}
    width={1}
  >
    <Container px={0} py={4} maxWidth={maxWidth}>
      {children}
    </Container>
  </Box>
);

BoxedContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  /* eslint-disable-next-line */
  maxWidth: PropTypes.number, 
};

const Wrapper = styled(BoxedContainer)`
  ${background} 
  ${backgroundImage} 
  ${backgroundSize}
`;
Wrapper.displayName = 'Wrapper';


export default Wrapper;
