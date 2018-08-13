import React from 'react'

import { Flex } from '../../atoms'
import { P } from '../../molecules'

const HeroDescription = ({ children }) => (
  <Flex.horizontallyCenter px={[2, 2, 5, '18%']} pb={1}>
    <P lineHeight={3} align='center'>
      {children}
    </P>
  </Flex.horizontallyCenter>
)

export default HeroDescription