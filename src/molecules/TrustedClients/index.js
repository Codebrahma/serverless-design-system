import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Image,
  ListItem,
  List,
  Text,
} from '../../atoms';

// TODO: remove this once kamesh makes header component
const H4 = styled.h4`
font-family: 'SoleilBk';
font-weight: normal;
margin-bottom: 20px;
font-size: 24px;
letter-spacing: -0.4px;
line-height: 1;
text-align: center;
`;
// Todo:
// 1. Not sure of breakpoints.
// 2. h4 replace with Heading
const TrustedClients = () => (
  <Box
    px="15px"
    width="100%"
    maxWidth="1260px"
  >
    <H4>
      Serverless platform is trusted by
    </H4>
    <List
      display="flex"
      flexDirection={['column', 'row']}
      justifyContent="space-between"
      alignItems="center"
    >
      <ListItem footer>
        <Image
          src="https://serverless.com/_/src/assets/images/ea-logo.5a55f9447c3626d1f68588cb1ed7d1a6.png"
          width={['auto', '80%', '100%']}
          maxHeight={['41px', '', '']}
        />
      </ListItem>
      <ListItem footer>
        <Image
          src="https://serverless.com/_/src/assets/images/cocacola-logo.503c39b412c589b0f1485a2c07091385.png"
          width={['auto', '80%', '100%']}
          maxHeight={['41px', '', '']}
        />
      </ListItem>
      <ListItem footer>
        <Image
          src="https://serverless.com/_/src/assets/images/nordstrom-logo.f4f30520b4330d1de1ab3dab430a9caf.png"
          width={['auto', '80%', '100%']}
          maxHeight={['41px', '', '']}
        />
      </ListItem>
      <ListItem footer>
        <Image
          src="https://serverless.com/_/src/assets/images/expedia-logo.056101cd8f42ba560c27ddfa4ae925ff.png"
          width={['auto', '80%', '100%']}
          maxHeight={['41px', '', '']}
        />
      </ListItem>
      <ListItem footer>
        <Image
          src="https://serverless.com/_/src/assets/images/reuters-logo.f1e4ccb495fa3788d3af8269d9f77541.png"
          width={['auto', '80%', '100%']}
          maxHeight={['41px', '', '']}
        />
      </ListItem>
    </List>
  </Box>
);

export default TrustedClients;
