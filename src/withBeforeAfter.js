import styled from 'styled-components';
import {
  beforeBoxHeight,
  afterBoxHeight,
  beforeBoxWidth,
  afterBoxWidth,
} from './customStyleSystem';

export default (comp, selector, beforeBlockStyle, afterBlockStyle) => (
  styled(comp)`
    ${selector} {

      &:before {
        ${beforeBoxHeight}
        ${beforeBoxWidth}
        ${beforeBlockStyle}
      }

      &:after {
        ${afterBoxHeight}
        ${afterBoxWidth}
        ${afterBlockStyle}
      }
    }
  `
)
