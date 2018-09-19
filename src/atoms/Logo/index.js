import styled from 'styled-components';
import { height, width } from 'styled-system';

const Logo = styled.img`
  cursor: pointer;
  ${height}
  ${width}
`;

Logo.displayName = 'Logo';

export default Logo;
