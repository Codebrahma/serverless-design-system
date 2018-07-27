import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import {
  LiveEditor,
  LivePreview,
  LiveProvider,
} from 'react-live';

import Button from '../../src/Button';
import Testimonial from '../../src/Testimonial';
import theme from '../../src/theme';

const scope = {
  styled, React, Button, Testimonial,
};

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%
`;

const StyledEditor = styled(LiveEditor)`
  font-size: 20px;
  overflow: scroll;
  width: 30%;
`;

const StyledPreview = styled(LivePreview)`
  width: 70%;
`;

const LiveEdit = ({ code }) => (
  <LiveProvider
    code={code}
    scope={scope}
  >
    <LiveWrapper>
      <StyledEditor />
      <ThemeProvider theme={theme}>
        <StyledPreview />
      </ThemeProvider>
    </LiveWrapper>
  </LiveProvider>
);

LiveEdit.propTypes = { code: PropTypes.string };
LiveEdit.defaultProps = { code: '' };
export default LiveEdit;
