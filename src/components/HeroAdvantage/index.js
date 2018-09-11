import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Text } from '../../atoms'
import { P, TextWithIcon } from '../../molecules'

const HeroAdvantage = ({ img, title, description }) => (
  <Flex width={[1, 1, 1 / 3]} px={[0, 0, 2]} mt={2} flexDirection='column'>
    <Flex justifyContent={['center', 'center', 'left']}>
      <TextWithIcon
        iconSrc={img}
        iconHeight='26px'
        iconWidth='45px'
        iconTop='-5px'
        iconLeft='-10px'
        backgroundSize='cover'
        textAlign={['center', 'center', 'left']}
      >
        <Text.span
          color='white'
          fontFamily='SoleilBk'
          fontSize='4'
          align='center'
        >
          {title}
        </Text.span>
      </TextWithIcon>
    </Flex>
    <P color='gray.3'>{description}</P>
  </Flex>
)

HeroAdvantage.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeroAdvantage