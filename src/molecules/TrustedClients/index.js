import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Image,
  List,
} from '../../atoms';

import {
  FooterListItem,
  Heading,
} from '../index';

const TrustedClients = () => (
  <Box
    px="15px"
    width="100%"
    maxWidth="1260px"
  >
    <Heading.h4>
      Serverless platform is trusted by
    </Heading.h4>
    <List
      display="flex"
      flexDirection={['column', 'row']}
      justifyContent="space-between"
      alignItems="center"
    >
      <FooterListItem footer>
        <Image
          src="https://serverless.com/_/src/assets/images/ea-logo.5a55f9447c3626d1f68588cb1ed7d1a6.png"
          width={['auto', '80%', '100%']}
          maxHeight={['41px', '', '']}
        />
      </FooterListItem>
      <FooterListItem footer>
        <Image
          src="https://serverless.com/_/src/assets/images/cocacola-logo.503c39b412c589b0f1485a2c07091385.png"
          width={['auto', '80%', '100%']}
          maxHeight={['41px', '', '']}
        />
      </FooterListItem>
      <FooterListItem footer>
        <Image
          src="https://serverless.com/_/src/assets/images/nordstrom-logo.f4f30520b4330d1de1ab3dab430a9caf.png"
          width={['auto', '80%', '100%']}
          maxHeight={['41px', '', '']}
        />
      </FooterListItem>
      <FooterListItem footer>
        <Image
          src="https://serverless.com/_/src/assets/images/expedia-logo.056101cd8f42ba560c27ddfa4ae925ff.png"
          width={['auto', '80%', '100%']}
          maxHeight={['41px', '', '']}
        />
      </FooterListItem>
      <FooterListItem footer>
        <Image
          src="https://serverless.com/_/src/assets/images/reuters-logo.f1e4ccb495fa3788d3af8269d9f77541.png"
          width={['auto', '80%', '100%']}
          maxHeight={['41px', '', '']}
        />
      </FooterListItem>
    </List>
  </Box>
);

export default TrustedClients;
