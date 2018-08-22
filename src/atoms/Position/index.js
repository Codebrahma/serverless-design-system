import styled from 'styled-components'
import {
  position,
  top,
  left,
  right,
  bottom,
  minWidth,
  zIndex,
} from 'styled-system'

import Box from './../Box'

export default styled(Box)`
  ${position}
  ${top}
  ${left}
  ${right}
  ${bottom}
  ${minWidth}
  ${zIndex}
`
