import styled from 'styled-components';
import {
  height,
  width,
  background,
  backgroundImage,
  backgroundRepeat,
  backgroundSize,
  backgroundPosition,
} from 'styled-system';

const Background = styled.div`
  ${height}
  ${width}
  ${background}
  ${backgroundImage}
  ${backgroundRepeat}
  ${backgroundSize}
  ${backgroundPosition}
`;

Background.displayName = 'Box';

export default Background;
