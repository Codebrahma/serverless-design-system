import React from 'react';

import Box from '../../Box';
import Navbar from './navbar';

export default ({ logo, menu }) => (
  <Box
    position='fixed'
    width={1}
    left={0}
    right={0}
    zIndex='999'
    backgroundColor='black'
    py={[2, 2, 0, 0, 0]}>
    <Box
      px='15px'
      m='auto'
      maxWidth='1'
      display='flex'
      flexDirection='row'
      flexWrap='wrap'
      alignItems='center'
      justifyContent='space-between'
    >
      {logo}

      <Navbar menu={menu} />
    </Box>
  </Box>
)
