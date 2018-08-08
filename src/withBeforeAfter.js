import styled from 'styled-components';
import {
  beforeBoxHeight,
  afterBoxHeight,
  beforeBoxWidth,
  afterBoxWidth,
  beforeBoxBorderWidth,
  afterBoxBorderWidth,
  beforeBoxLeft,
  afterBoxLeft,
  beforeBoxBackgroundColor,
  afterBoxBackgroundColor,
} from './customStyleSystem';

export default (
  comp,
  selector=`&`,
  beforeBlockStyle=``,
  afterBlockStyle=``,
  selectorStyle=``
) => (
  styled(comp)`
    ${selector} {
      &:before {
        ${beforeBoxHeight}
        ${beforeBoxWidth}
        ${beforeBlockStyle}
        ${beforeBoxBorderWidth}
        ${beforeBoxLeft}
        ${beforeBoxBackgroundColor}
      }

      &:after {
        ${afterBoxHeight}
        ${afterBoxWidth}
        ${afterBlockStyle}
        ${afterBoxBorderWidth}
        ${afterBoxLeft}
        ${afterBoxBackgroundColor}
      }

      ${selectorStyle}
    }
  `
)
