import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme.js';
import { action } from '@storybook/addon-actions';
import Button from '../src/Button';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    { storyFn() }
  </ThemeProvider>
);


storiesOf('Button', module)
  .addDecorator(ThemeDecorator)
  .add('primary', () => (
    <Button onClick={action('clicked')}>Primary</Button>
  ))
  .add('disabled', () => (
    <Button disabled onClick={action('clicked')}>Disabled</Button>
  ))
  .add('secondary', () => (
    <Button secondary onClick={action('clicked')}>Secondary</Button>
  ))
  .add('secondary disabled', () => (
    <Button secondary disabled onClick={action('clicked')}>Secondary Disabled</Button>
  ));
