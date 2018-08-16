import styled from 'styled-components';
import { backgroundImage, backgroundSize, background } from 'styled-system';

const BackgroundImage = styled.div`
  ${background}
  ${backgroundImage} 
  ${backgroundSize}
`;

BackgroundImage.displayName = 'BackgroundImage';

export default BackgroundImage;
