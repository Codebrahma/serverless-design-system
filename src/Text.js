import styled from 'styled-components'
import {space, fontFamily, fontWeight, 
        fontSize, lineHeight, letterSpacing, color} from 'styled-system'

const fontStyle = (props) => ({
    fontStyle : props.fontStyle ? props.fontStyle : null
  })

const Text = styled.div`
  ${fontFamily} ${fontWeight} ${fontSize} ${fontStyle}
  ${lineHeight} ${letterSpacing}
  ${space} ${color}
`

Text.displayName = 'Text'


Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text