import React from 'react'
import styled from 'styled-components'
import {
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  position,
  top,
  left,
  height,
  width,
} from 'styled-system';

const TextWithIcon = styled.span`
  position: relative;
  > h1, h2, h3, h4, h5, h6, span, p, div {
    position: relative;
    z-index: 1;

    &:before {
      z-index: -1;
      content: ' ';
      background-image: url(${props => props.iconSrc});
      ${top}
      ${left}
      ${height}
      ${width}
      ${position}
      ${backgroundSize}
      ${backgroundPosition}
      ${backgroundRepeat}
    }
  }
`

TextWithIcon.displayName = 'TextWithIcon'

TextWithIcon.defaultProps = {
  position: 'absolute',
  backgroundSize: 'cover',
}

export default ({ iconTop, iconLeft, iconHeight, iconWidth, ...otherProps }) => (
  <TextWithIcon
    top={iconTop}
    left={iconLeft}
    height={iconHeight}
    width={iconWidth}
    {...otherProps}
  />
)
