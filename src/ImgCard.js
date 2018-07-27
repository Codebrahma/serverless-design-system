import React from 'react'
import styled from 'styled-components'

import Heading from './Heading'
import Text from './Text'
import Img from './Image'
import Box from './Box'

const comp = ({img, title, description})=> {
  return(
    <Box
      px={[3,4]}
      py={4}
    >
      <Box
        display='flex'
      >
        <Img
          height='100%'
          src={img}
          alt={title}
          mx='auto'
        />
      </Box>

      <Heading.h2
        textAlign="center"
        my={3}
        lineHeight={3}
      >
        {title}
      </Heading.h2>
      <Text.p
        fontFamily="Soleil"
        fontSize={3}
        lineHeight={5}
        color='gray.7'
        textAlign='center'
        mt={0}
      >
        {description}
      </Text.p>

    </Box>
  );
}

const ImgCard = styled(comp)``

export default ImgCard;