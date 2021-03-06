'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var font = {
  default: 'Serverless',
  header: 'SoleilBk',
  p: 'SoleilBk',
  psmall: 'Soleil',
  plarge: 'SoleilLt'
};

var breakpoints = ['320px', '768px', '992px', '1280px', '1600px'];

var navbarHeights = {
  mobile: '62px',
  desktop: '90px'
};

var maxWidths = ['100%', '1260px'];

var colors = {
  text: '#024',
  white: '#fff',
  black: '#000',
  serverlessRed: '#fd5750',
  darkServerlessRed: '#b73833',
  // nested objects work as well
  dark: {
    blue: '#058'
  },
  // arrays can be used for scales of colors
  gray: ['#f7f7f7', '#eaeaea', '#8c8c8c', '#5b5b5b'],
  gradient: {
    black1: '#222222'
  }
};
colors.primaryColor = colors.serverlessRed;
colors.secondaryColor = colors.darkServerlessRed;

// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
// numbers are converted to px
var space = [0, 10, 20, 30, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240];
// typographic scale
var fontSizes = ['1.2rem', '1.4rem', '1.6rem', '1.8rem', '2.4rem', '3.2rem', '4rem', '4.8rem', '9rem'];

// for any scale, either array or objects will work
var lineHeights = [1, 1.125, 1.25, 1.33, 1.5, 2, 3, 7];

var heights = {
  fullHeight: '100%'
};

var fontWeights = {
  normal: 400,
  bold: 700
};

var letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  smallNegative: '-0.03px',
  primaryBtn: '0.05em',
  textField: '0.5px',
  text: '0.6px',
  h1: 'normal',
  h2: '0.5px',
  h3: 'normal',
  h4: '-0.5px',
  h5: '-0.4px',
  h6: '-0.3px'
};

// border-radius
var radii = [0, 2, 4, 8];

var borders = [0, '1px solid', '2px solid', '3px solid'];

var shadows = ['0 1px 2px 0 ' + colors.text, '0 1px 4px 0 ' + colors.text];

var theme = {
  maxContainerWidth: '1260px',
  font: font,
  heights: heights,
  breakpoints: breakpoints,
  navbarHeights: navbarHeights,
  maxWidths: maxWidths,
  colors: colors,
  space: space,
  fontSizes: fontSizes,
  lineHeights: lineHeights,
  fontWeights: fontWeights,
  letterSpacings: letterSpacings,
  radii: radii,
  borders: borders,
  shadows: shadows
};

exports.default = theme;