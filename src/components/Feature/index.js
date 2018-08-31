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
    top: -2.5rem;
  `,
  ``,
  `position: relative;`
);

const Feature = ({ header, img, content, leadingNumber, rightAligned }) => (
  <Relative
    width={[1, 1, 3/7, 5/10]}
    pr={[0, 0, 2, rightAligned ? '15.5%' : 0]}
    pl={[0, 0, 2, rightAligned ? 0 : '15.5%' ]}
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
