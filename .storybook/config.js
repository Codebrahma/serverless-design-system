import { configure } from '@storybook/react';
import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: 'serverless';
    src: url('https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/fonts/serverless.otf') format('opentype');
  }
`;


const req = require.context('.', true, /\.js$/)
const load = () => {
  req.keys().forEach(req)
}

configure(load, module)