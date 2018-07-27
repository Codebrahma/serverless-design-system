// example template

module.exports = ({
  html,
  scripts,
}) => `<!DOCTYPE html>
<head>
  <title> Design Components</title>
  <style>
  @font-face {
    font-family: 'serverless';
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
  </style>
</head>
<div id=root>${html}</div>
${scripts}
`