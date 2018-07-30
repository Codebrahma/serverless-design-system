import styled from 'styled-components';
import { space, width, color, borderColor,
  border, display,
  flexWrap, flexDirection, justifyContent, order
} from 'styled-system';

const TextWithIcon = styled.div`
  ${space} ${width} ${color}
  ${border} ${borderColor}
  ${display} ${flexWrap} ${flexDirection}
  ${justifyContent} ${order}
  position: relative;

  > h1, h2, h3, h4, h5, h6, span, p, div {
    &:before {
      content: ' ';
      position: absolute;
      top: ${props => props.iconTop};
      height: ${props => props.iconHeight};
      width: ${props => props.iconWidth};
      background-image: url(${props => props.iconSrc});
      background-size: cover;
    }
  }
`;

TextWithIcon.displayName = 'TextWithIcon';

export default TextWithIcon;
