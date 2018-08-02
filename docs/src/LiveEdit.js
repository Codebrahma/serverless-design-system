import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import {
  LiveEditor,
  LivePreview,
  LiveProvider,
} from 'react-live';

import * as components from '../../src';
import theme from '../../src/theme';

const scope = {
  ...components.default,
};

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  margin: 10px auto;
`;

const StyledEditor = styled(LiveEditor)`
  overflow: scroll;
  width: 100%;
`;

const StyledPreview = styled(LivePreview)`
  margin-top:10px;
  width: 100%;
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
