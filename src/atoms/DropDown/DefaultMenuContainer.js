import React from 'react'
import styled from 'styled-components'
import { borderLeft, borderTop, borderRight, borderBottom } from 'styled-system'

import Box from './../Box'

const MenuContainer = styled(Box.absolute)`
  ${borderLeft}
  ${borderTop}
  ${borderRight}
  ${borderBottom}
`;

MenuContainer.defaultProps = {
  bg: 'white',
  border: '1px solid #ccc',
  mt: '-1px',
  maxHeight: '200px',
  oy: 'auto',
  top: '100%',
  width: 1,
  zIndex: '100',
}

export default ({ isOpen, styleProps, children }) => {
  console.log(styleProps);
  return (isOpen ? <MenuContainer {...styleProps}>{ children }</MenuContainer> : null)
};
