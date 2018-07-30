import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import Button from '../../src/Button';
import Testimonial from '../../src/Testimonial';
import ImgCard from '../../src/ImgCard';
import Heading from '../../src/Heading';
import { P } from '../../src/Typography';
import TextWithIcon from '../../src/molecules/TextWithIcon';

import theme from '../../src/theme';

import {
  LiveEditor,
  LivePreview,
  LiveProvider,
} from 'react-live';

const scope = {
  styled, React, Button, Testimonial, ImgCard, Heading, P, TextWithIcon
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
