import React from 'react';
import {
  Box,
  Image,
  ListItem,
  List,
  Text,
} from '../../atoms';

// Todo: Not sure of breakpoints.
const TrustedClients = () => (
  <div>
    <Text>
      Serverless platform is trusted by
    </Text>
    <Box
      px="15px"
    >
      <List
        display="flex"
        flexDirection={['column', 'row', 'row', 'row']}
        justifyContent={['space-between', '', '', '']}
      >
        <ListItem footer>
          <Image
            src="https://serverless.com/_/src/assets/images/ea-logo.5a55f9447c3626d1f68588cb1ed7d1a6.png"
            width={['100%', '80%']}
          />
        </ListItem>
        <ListItem footer>
          <Image
            src="https://serverless.com/_/src/assets/images/cocacola-logo.503c39b412c589b0f1485a2c07091385.png"
            width={['100%', '80%']}
          />
        </ListItem>
        <ListItem footer>
          <Image
            src="https://serverless.com/_/src/assets/images/nordstrom-logo.f4f30520b4330d1de1ab3dab430a9caf.png"
            width={['100%', '80%']}
          />
        </ListItem>
        <ListItem footer>
          <Image
            src="https://serverless.com/_/src/assets/images/expedia-logo.056101cd8f42ba560c27ddfa4ae925ff.png"
            width={['100%', '80%']}
          />
        </ListItem>
        <ListItem footer>
          <Image
            src="https://serverless.com/_/src/assets/images/reuters-logo.f1e4ccb495fa3788d3af8269d9f77541.png"
            width={['100%', '80%']}
          />
        </ListItem>
      </List>
    </Box>
  </div>
);

export default TrustedClients;
