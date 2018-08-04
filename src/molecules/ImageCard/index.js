import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import P from '../Typography';

import {
  Image as Img,
  Box,
} from '../../atoms';

const comp = ({ img, title, description }) => (
  <Box
    px={[3, 4]}
    py={4}
  >
    <Box
      display="flex"
    >
      <Img
        height="100%"
        src={img}
        alt={title}
        mx="auto"
      />
    </Box>

    <Heading.h3
      align="center"
      my={3}
      fontFamily='SoleilBk'
    >
      {title}
    </Heading.h3>
    <P
      align="center"
      mt={0}
    >
      {description}
    </P>

  </Box>
);

const ImgCard = styled(comp)``;

export default ImgCard;
