import React from 'react';

import Box from '../../Box';
import Text from '../../Text';
import { List, ListItem } from '../../list';

const MenuItem = ({ name }) => (
    <Box px='25px' py='35.5px'>
      <Text.span
        fontFamily='Serverless'
        fontSize={'16px'}
        color={'white'}
      >
        {name}
      </Text.span>
    </Box>
)

const Navbar = ({ menu }) => (
  <Box>
    <List m='0' p='0'>
      {
        menu.map(({ name }) => (
          <ListItem
            display={['block', 'block', 'inline-block']}
            key={name}
          >
            <MenuItem name={name} />
          </ListItem>
        ))
      }
    </List>
  </Box>
)

Navbar.defaultProps = {
  menu: []
}

export default Navbar;
