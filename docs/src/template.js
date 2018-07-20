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
  .playground {
    display: flex;
    align-items:center;
    margin: 20px;
  }
  .playgroundCode {
    width: 30%;
  }
  .playgroundPreview {
    width: 40%;
    margin-left: 20px;
  }
  </style>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css"/>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/theme/monokai.min.css"/>
</head>
<div id=root>${html}</div>
${scripts}
`