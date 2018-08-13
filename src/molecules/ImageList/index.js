import React from 'react'

import { Image, ResponsiveStack } from '../../atoms'

const EachImage = ({ src: logo, altText, maxWidth, maxHeight }) => (
  <Image
    src={logo}
    alt={altText}
    maxHeight={maxHeight}
    maxWidth={maxWidth}
    my={2}
  />
)

const ImageList = ({ list, ...props}) => (
  <ResponsiveStack.verticallyCenter justifyContent='space-between' width={1}>
    {
      list.map(({ src, altText }) => (
        <EachImage key={src} src={src} altText={altText} {...props} />
      ))
    }
  </ResponsiveStack.verticallyCenter>
)

export default ImageList
