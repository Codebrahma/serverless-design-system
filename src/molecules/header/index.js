import React from 'react';

import Box from '../../Box';

export default ({ logo }) => (
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
    </Box>
  </Box>
)
