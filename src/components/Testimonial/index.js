import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Flex,
  Text,
  Image as Img,
  ResponsiveStack,
  Background,
  Card
} from '../../atoms';

const comp = ({
  img, children, name, designation, alt,
}) => {
  const testimonial = children;
  return (
    <Background background="white">
      <Card
        px={[2, 3, 4]}
        py={5}
        border={3}
        borderColor="primaryColor"
      >
        <Flex
          flexWrap="wrap"
          flexDirection={['column', 'row']}
          justifyContent={['', 'space-between']}
        >
          <Text
            fontFamily="SoleilBk"
            fontSize={4}
            fontStyle="italic"
            lineHeight={3}
            mb={3}
            width={1}
          >
            {testimonial}
          </Text>

          <ResponsiveStack width={1}>
            <Flex
              width={[1, 1, 4 / 10]}
              order={[ '0', '0', '1' ]}
              alignItems="flex-end"
              justifyContent={[ 'flex-start', 'flex-start', 'flex-end' ]}
            >
              <Img
                mt={3}
                width={[82, 128]}
                height={[27, 42]}
                src={img}
                alt={alt}
              />
            </Flex>

            <Flex
              flexDirection='column'
              mt={3}
              width={[1, 1, 6 / 10]}
              order={[ '1', '1', '0' ]}
            >
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
            </Flex>
          </ResponsiveStack>
        </Flex>
      </Card>
    </Background>
  );
};

comp.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Testimonial = styled(comp)``;

export default Testimonial;
