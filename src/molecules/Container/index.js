import styled from 'styled-components';
import { maxWidth } from 'styled-system';
import PropTypes from 'prop-types';

import theme from '../../theme';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${maxWidth};
`;

Container.propTypes = {
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ])
};

Container.defaultProps = {
  maxWidth: theme.maxContainerWidth,
};

Container.displayName = 'Container';
export default Container;
