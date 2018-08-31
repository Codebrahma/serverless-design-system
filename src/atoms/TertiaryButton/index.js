import styled from 'styled-components'
import Button from './../Button'
import { hexToRgbA } from '../../utils'

const TertiaryButton = styled(Button)`
  background: ${({ background }) => background || 'white'};
  color: ${({ theme }) => theme.colors.primaryColor};
  transition: background 0.5s ease;
  &:hover {
    background: ${(props) => (props.disabled ? null : hexToRgbA(props.theme.colors.white, 0.70))};
  };
`

export default TertiaryButton
