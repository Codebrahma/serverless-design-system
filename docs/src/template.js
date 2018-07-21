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
  .react-live {
    display: flex;
    align-items:center;
    margin: 20px;
  }
  .react-live-editor {
    width: 30%;
  }
  .react-live-preview {
    margin-left: 20px;
  }
  </style>
</head>
<div id=root><ThemeProvider theme={theme}>${html}</ThemeProvider></div>
${scripts}
`