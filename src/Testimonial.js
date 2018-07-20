import React from 'react'
import styled from 'styled-components'
import {order} from 'styled-system'
//internal dependencies
import Text from './Text'
import Img from './Image'
import Box from './Box'

const ImgWithOrder = styled(Img)`
  ${order}
`

const comp = ({img, children, name, designation})=> {
  const testimonial = children;
  return(
    <Box px={[3,4]} py={5}
        border={3}
        borderColor='primaryColor'
        display='flex'
        flexWrap='wrap'
        flexDirection={['column', 'row']}
        justifyContent={['','space-between']}
    >
      <Box width={1}>
        <Text 
          fontFamily="SoleilBk" fontSize={5} fontStyle='italic'
          lineHeight={3} mb={3}>
            {testimonial}
        </Text>
      </Box>
      
      <Box order={['0','1']}>
        <Img
          mt={3} 
          width={[82,128]} height={[27,42]}
          src={img} alt='Coca Cola'
        />
      </Box>
      
      <Box mt={3}>
        <Text 
          fontFamily="SoleilBk" fontSize={3}
          letterSpacing={'smallNegative'}
        >
          {name}
        </Text>
        <Text
          fontFamily="Soleil" fontSize={0}
          lineHeight={3}
          color='gray.2'
        >
          {designation}
        </Text>
      </Box>
    
    </Box>
  );
}

const Testimonial = styled(comp)``

export default Testimonial;