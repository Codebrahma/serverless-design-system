import React from 'react';
import styled from 'styled-components';
// internal dependencies
import Text from '../../atoms/Text';
import Img from '../../atoms/Image';
import Box from '../../atoms/Box';
import Flex from '../../atoms/Flex';


const comp = ({img, children, name, designation, alt}) => {
  const testimonial = children;
  return (
    <Flex
      px={[3, 4]}
      py={5}
      border={3}
      borderColor="primaryColor"
      flexWrap="wrap"
      flexDirection={['column', 'row']}
      justifyContent={['', 'space-between']}
    >
      <Box width={1}>
        <Text
          fontFamily="SoleilBk"
          fontSize={2}
          fontStyle="italic"
          lineHeight={3}
          mb={3}
        >
          {testimonial}
        </Text>
      </Box>
      <Flex order={['0', '1']}>
        <Img
          mt={3}
          width={[82, 128]}
          height={[27, 42]}
          src={img}
          alt={alt}
        />
      </Flex>
      <Box mt={3}>
        <Text
          fontFamily="SoleilBk"
          fontSize={3}
          letterSpacing={'smallNegative'}
        >
          {name}
        </Text>
        <Text
          fontFamily="Soleil"
          fontSize={0}
          lineHeight={3}
          color="gray.2"
        >
          {designation}
        </Text>
      </Box>
    </Flex>
  );
};

const Testimonial = styled(comp)``;

export default Testimonial;
