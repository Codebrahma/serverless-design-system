import styled from 'styled-components'
import {
  width,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth
} from 'styled-system'
import { objectFit } from '../../customStyleSystem'

export default styled.img`
  ${width}
  ${height}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${objectFit}
`
