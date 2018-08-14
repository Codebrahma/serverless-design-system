import styled from 'styled-components'

const Icon = styled.span`
  border-color: ${({ isOpen }) => (isOpen ? '#999 transparent transparent' : 'transparent transparent #999')};
  border-style: solid;
  border-width: ${({ isOpen }) => (isOpen ? '0 5px 5px' : '5px 5px 0')};
  content: ' ';
  display: block;
  height: 0;
  margin-top: -ceil(2.5);
  position: absolute;
  right: 10px;
  top: 14px;
  width: 0;
`

Icon.defaultProps = { isOpen: false }

export default Icon
