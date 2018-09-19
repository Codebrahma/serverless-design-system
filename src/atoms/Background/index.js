import styled from 'styled-components';
import {
  height,
  width,
  background,
  backgroundImage,
  backgroundRepeat,
  backgroundSize,
  backgroundPosition,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
} from 'styled-system';

const Background = styled.div`
  ${height}
  ${width}
  ${background}
  ${backgroundImage}
  ${backgroundRepeat}
  ${backgroundSize}
  ${backgroundPosition}
  ${minHeight}
  ${minWidth}
  ${maxHeight}
  ${maxWidth}
`;

Background.displayName = 'Background';

export default Background;
