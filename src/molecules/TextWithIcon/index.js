import styled from 'styled-components';
import { backgroundSize, position } from 'styled-system';

const TextWithIcon = styled.span`
  position: relative;
  > h1, h2, h3, h4, h5, h6, span, p, div {
    position: relative;
    z-index: 1;

    &:before {
      z-index: -1;
      content: ' ';
      top: ${props => props.iconTop};
      left: ${props => props.iconLeft};
      height: ${props => props.iconHeight};
      width: ${props => props.iconWidth};
      background-image: url(${props => props.iconSrc});
      ${position}
      ${backgroundSize}
    }
  }
`;

TextWithIcon.displayName = 'TextWithIcon';

TextWithIcon.defaultProps = {
  position: 'absolute',
  backgroundSize: 'cover',
};

export default TextWithIcon;
