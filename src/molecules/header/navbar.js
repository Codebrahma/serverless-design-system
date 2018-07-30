import React from 'react';

import Box from '../../Box';
import Image from '../../Image';
import Text from '../../Text';
import { List, ListItem } from '../../list';

const MenuTitle = ({ name }) => (
  <Box px='25px' py='35.5px'>
    <Text.span
      fontFamily='Serverless'
      fontSize={'16px'}
      color={'white'}
      letterSpacing={0.7}
    >
      {name}
    </Text.span>
  </Box>
)

const DetailedMenu = () => (
  <Box pl={6} pr={6} pt={5} pb={6}>
    <List p={0} m={0}>
      {
        [
          {
            imgProps: {
              src: 'https://serverless.com/_/src/assets/images/bolt.be31a2cb237f3c0d40581ecba9efa8d3.png',
              maxHeight: '52px',
              ml: '8px',
              mr: '43px',
            },
            text: 'framework'
          },
          {
            imgProps: {
              src: 'https://serverless.com/_/src/assets/images/group-6.42d1cd534252f3f9b17e6f4d3e3ac818.png',
              maxHeight: '40px',
              mr: '30px'
            },
            text: 'event gateway'
          },
          {
            imgProps: {
              src: 'https://serverless.com/_/src/assets/images/icon-dashboard.670198be7530974cf50d17671215f69f.png',
              maxHeight: '40px',
              mr: '30px'
            },
            text: 'dashboard'
          }
        ].map(({ imgProps, text }) => (
          <ListItem>
            <Box display='flex' mb={20}>
              <Image {...imgProps} />
              <Box display='inline'>
                <Text.p
                  fontFamily='Serverless'
                  fontSize='15px'
                  lineHeight={0.7}
                  letterSpacing='5'
                  m={0}
                  color={'white'}
                >
                  serverless
                </Text.p>
                <Text.p
                  fontFamily='Serverless'
                  fontSize='20px'
                  lineHeight={1.7}
                  letterSpacing={0.8}
                  m={0}
                  color={'white'}
                >
                  {text}
                </Text.p>
              </Box>
            </Box>
          </ListItem>
        ))
      }
    </List>
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
            <MenuTitle name={name} />
            <DetailedMenu />
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
