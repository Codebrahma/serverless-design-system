import React from 'react'

import { Flex, Image, InlineBlock, ResponsiveStack } from '../../atoms'

const EachImage = ({ src: logo, altText, maxWidth, maxHeight, containerProps, objectFit }) => (
  <InlineBlock my={2}>
    <Flex.horizontallyCenter {...containerProps}>
      <Image
        src={logo}
        alt={altText}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        objectFit={objectFit}
      />
    </Flex.horizontallyCenter>
  </InlineBlock>
)

const ImageList = ({ list, ...props}) => (
  <ResponsiveStack.verticallyCenter
    justifyContent='space-between'
    width={1}
  >
    {
      list.map(({ src, altText }) => (
        <EachImage
          key={src}
          src={src}
          altText={altText}
          {...props}
        />
      ))
    }
  </ResponsiveStack.verticallyCenter>
)

export default ImageList
