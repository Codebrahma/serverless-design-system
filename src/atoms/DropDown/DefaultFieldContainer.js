import styled from 'styled-components'
import Box from '../Box'

const FieldContainer = styled(Box.relative)`
  cursor: default;
  outline: none;

  &:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  }
`

FieldContainer.defaultProps = {
  o: 'hidden',
  bg: 'white',
  border: '1px solid #ccc',
  color: 'black',
  py: '14.5px',
  pl: '10px',
  pr: '52px',
  transition: 'all 200ms ease',
}

export default FieldContainer
