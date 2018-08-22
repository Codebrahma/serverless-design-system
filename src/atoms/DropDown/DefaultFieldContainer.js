import styled from 'styled-components'
import { background } from 'styled-system'

import Card from '../Card'

const FieldContainer = styled(Card)`
  position: relative;
  cursor: default;
  outline: none;
  ${background}

  &:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  }
`

FieldContainer.defaultProps = {
  o: 'hidden',
  background: 'white',
  color: 'black',
  py: '14.5px',
  pl: '10px',
  pr: '52px',
  transition: 'all 200ms ease',
  border: '1px solid #ccc',
}

export default FieldContainer
