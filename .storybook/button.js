import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/Button';

storiesOf('Button', module)
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