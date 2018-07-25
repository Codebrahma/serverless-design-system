import styled from 'styled-components'
import { space, width, color, borderColor, 
  border, display, 
  flexWrap, flexDirection, justifyContent,order,
  maxWidth, minWidth } 
from 'styled-system'

const Box = styled.div`
  ${space} ${width} ${minWidth} ${maxWidth} ${color} 
  ${border} ${borderColor}
  ${display} ${flexWrap} ${flexDirection} 
  ${justifyContent} ${order}
`

Box.displayName = 'Box'

export default Box