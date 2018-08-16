import React from 'react'
import styled from 'styled-components'

import Box from './../Box'

const MenuContainer = styled(Box.absolute)`
`;

MenuContainer.defaultProps = {
  bg: 'white',
  border: '1px solid #ccc',
  boxShadow: '0 1px 0 rgba(0, 0, 0, 0.06)',
  mt: '-1px',
  maxHeight: '200px',
  oy: 'auto',
  top: '100%',
  width: 1,
  zIndex: '1000',
}

export default ({ isOpen, children }) => (
  isOpen ? <MenuContainer>{ children }</MenuContainer> : null
);
