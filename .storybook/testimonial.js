import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import Testimonial from '../src/molecules/Testimonial';
import theme from '../src/theme.js';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    { storyFn() }
  </ThemeProvider>
);


storiesOf('Testimonial', module)
  .addDecorator(ThemeDecorator)
  .add('Testimonial', () => (
    <Testimonial
      img="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cocacola-logo.png"
      name="Patrick Brandt"
      designation="Solutions Architect at The Coca Cola Company"
    >
    "The Serverless Framework is a core component of The Coca-Cola Company's initiative to reduce IT operational costs and deploy services faster."
    </Testimonial>
  ));
