import React from 'react';
import PropTypes from 'prop-types';

import { Box, Heading, Image, Relative } from '../../atoms';
import { P } from '../../molecules';
import withBeforeAfter from '../../withBeforeAfter';

const HeaderWithCount = withBeforeAfter(
  Heading.h3,
  `&`,
  `
    position: absolute;
    color: #fd5750;
    font-family: 'Soleil';
    font-size: 160px;
    font-size: 10rem;
    line-height: 1;
    z-index: -1;
    opacity: 0.08;
    left: -5rem;
  `
);

const Feature = ({ header, img, content, leadingNumber, rightAligned }) => (
  <Relative
    width={[1, 1, 3/7, 4/10]}
    mr={[0, 0, 2, rightAligned ? '10%' : 0]}
    ml={[0, 0, 2, rightAligned ? 0 : '10%' ]}
    pb={[4, 4, 5]}
    style={{ counterIncrement: 'step-counter' }}
  >
    {
      img && (
        <Box mb={25}>
          <Image src={img} />
        </Box>
      )
    }
    <HeaderWithCount
      fontFamily="SoleilBk"
      headingImagePresence={!!img}
      beforeBoxContent={[
        'none',
        'none',
        leadingNumber ? "counter(step-counter, decimal-leading-zero)" : 'none',
      ]}
      beforeBoxTop={img ? "7.5rem" : "-2.5rem"}
    >
      {header}
    </HeaderWithCount>
    <P>{content}</P>
  </Relative>
);

Feature.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  leadingNumber: PropTypes.bool
};

Feature.defaultProps = {
  leadingNumber: true
}

export default Feature;
