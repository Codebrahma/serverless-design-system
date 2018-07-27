import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from './Text';
import Img from './Image';
import Box from './Box';

const comp = ({
  img, children, name, designation, alt,
}) => {
  const testimonial = children;
  return (
    <Box
      px={[3, 4]}
      py={5}
      border={3}
      borderColor="primaryColor"
      display="flex"
      flexWrap="wrap"
      flexDirection={['column', 'row']}
      justifyContent={['', 'space-between']}
    >
      <Box width={1}>
        <Text
          fontFamily="SoleilBk"
          fontSize={5}
          fontStyle="italic"
          lineHeight={3}
          mb={3}
        >
          {testimonial}
        </Text>
      </Box>

      <Box order={['0', '1']}>
        <Img
          mt={3}
          width={[82, 128]}
          height={[27, 42]}
          src={img}
          alt={alt}
        />
      </Box>

      <Box mt={3}>
        <Text
          fontFamily="SoleilBk"
          fontSize={3}
          letterSpacing="smallNegative"
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

    </Box>
  );
};

comp.propTypes = {
  img: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Testimonial = styled(comp)``;

export default Testimonial;
