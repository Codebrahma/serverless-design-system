import styled from 'styled-components';

import Button from './../Button';
import { hexToRgbA } from '../../utils';

const SecondaryButton = styled(Button)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.primaryColor};
  &:hover {
    background: ${(props) => (props.disabled ? null : hexToRgbA(props.theme.colors.secondaryColor, '0.1'))};
  };
`;

export default SecondaryButton;
