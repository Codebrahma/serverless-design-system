import React from 'react';
import styled from 'styled-components';
import {
  background,
  backgroundImage,
  backgroundSize,
} from 'styled-system';
import PropTypes from 'prop-types';

import Container from '../Container';

const BoxedContainer = ({ className, children, maxWidth }) => (
  <div
    className={className}
  >
    <Container maxWidth={maxWidth}>
      {children}
    </Container>
  </div>
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
