import styled from 'styled-components';
import {
  beforeBoxHeight,
  afterBoxHeight,
  beforeBoxWidth,
  afterBoxWidth,
  beforeBoxBorderWidth,
  afterBoxBorderWidth,
} from './customStyleSystem';

export default (comp, selector, beforeBlockStyle, afterBlockStyle) => (
  styled(comp)`
    ${selector} {

      &:before {
        ${beforeBoxHeight}
        ${beforeBoxWidth}
        ${beforeBlockStyle}
        ${beforeBoxBorderWidth}
      }

      &:after {
        ${afterBoxHeight}
        ${afterBoxWidth}
        ${afterBlockStyle}
        ${afterBoxBorderWidth}
      }
    }
  `
)
