import styled from 'styled-components'
import Relative from '../Relative'

const FieldContainer = styled(Relative)`
  cursor: default;
  outline: none;
  border: 1px solid #ccc;

  &:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  }
`

FieldContainer.defaultProps = {
  o: 'hidden',
  bg: 'white',
  color: 'black',
  py: '14.5px',
  pl: '10px',
  pr: '52px',
  transition: 'all 200ms ease',
}

export default FieldContainer
