import { configure } from '@storybook/react';
import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: 'Serverless';
    src: url('https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/fonts/serverless.otf') format('opentype');
  }
  @font-face {
    font-family: 'SoleilBk';
    src: url('https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/fonts/soleil-bk.otf') format('opentype');
  }
  @font-face {
    font-family: 'Soleil';
    src: url('https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/fonts/soleil.otf') format('opentype');
  }
`;


const req = require.context('.', true, /\.js$/)
const load = () => {
  req.keys().forEach(req)
}

configure(load, module)