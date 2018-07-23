import React from 'react'
import styled from 'styled-components'

import Text from './Text'
import Img from './Image'
import Box from './Box'

const comp = ({img, title, description})=> {
  return(
    <Box
      px={[3,4]}
      py={4}
      border={0}
      width={['100%', '33.33%']}
    >
      <Box
        width='100%'
        display='flex'
      >
        <Img
          height='100%'
          width='auto'
          src={img}
          alt={title}
          mx='auto'
        />
      </Box>

      <Box mt={3} textAlign='center'>
        <Text.h4
          fontFamily="SoleilBk"
          fontSize={6}
          fontWeight='normal'
          letterSpacing={'smallNegative'}
          textAlign='center'
          lineHeight={3}
          mt={0}
          mb={3}
        >
          {title}
        </Text.h4>
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

    </Box>
  );
}

const Benefit = styled(comp)``

export default Benefit;