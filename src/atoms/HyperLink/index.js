import styled from 'styled-components'
import { color, borderBottom, borderColor } from 'styled-system'
import { textDecoration } from './../../customStyleSystem'

const HyperLink = styled.a`
  ${textDecoration}
  ${borderBottom}
  ${borderColor}
  ${color}

  &:hover {
    ${({ hoverColor }) => ({ color: hoverColor })}
  }

  &:active {
    ${({ activeColor }) => ({ color: activeColor })}
  }
`

HyperLink.defaultProps = {
  color: 'gray.3',
}

export default HyperLink
