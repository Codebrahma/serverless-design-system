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
  beforeBoxTop,
  afterBoxTop,
  beforeBoxBackgroundColor,
  afterBoxBackgroundColor,
  beforeBoxContent,
  afterBoxContent,
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
        ${beforeBoxContent}
        ${beforeBoxTop}
      }

      &:after {
        ${afterBoxHeight}
        ${afterBoxWidth}
        ${afterBlockStyle}
        ${afterBoxBorderWidth}
        ${afterBoxLeft}
        ${afterBoxBackgroundColor}
        ${afterBoxContent}
        ${afterBoxTop}
      }

      ${selectorStyle}
    }
  `
)
