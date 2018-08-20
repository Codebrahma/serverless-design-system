import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import P from '../Typography';

import {
  Box,
  Flex,
  Image as Img,
} from '../../atoms';

const comp = ({ img, imgProps, title, description, children }) => (
  <Box
    px={[2, 3, 2]}
    py={[2, 2, 2]}
  >
    <Flex.horizontallyCenter>
      <Img
        height="100%"
        src={img}
        alt={title}
        mx="auto"
        {...imgProps}
      />
    </Flex.horizontallyCenter>

    <Heading.h3
      align="center"
      fontFamily="SoleilBk"
      my={3}
    >
      {title}
    </Heading.h3>
    <P
      align="center"
      mt={0}
      fontSize={3}
    >
      {description}
    </P>

    { children }
  </Box>
);

const ImageCard = styled(comp)``;

export default ImageCard;
