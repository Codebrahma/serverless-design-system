import React from 'react'

import {ThemeProvider} from 'styled-components'

import Button from '../../src/Button'
import Testimonial from '../../src/Testimonial'
import ImgCard from '../../src/ImgCard';
import Heading from '../../src/Heading';
import {P} from '../../src/Typography';

import theme from '../../src/theme'


import styled from 'styled-components'


const scope = {styled, React, Button, Testimonial, ImgCard, Heading, P};

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
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  margin: 10px auto;
`


const StyledEditor = styled(LiveEditor)`
  overflow: scroll;
  width: 100%;
`

const StyledPreview = styled(LivePreview)`
  margin-top:10px;
  width: 100%;
`

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
