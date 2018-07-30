const font = {
  default: 'Serverless',
  header: 'SoleilBk',
  p: 'SoleilBk',
  psmall: 'Soleil',
  plarge: 'SoleilLt',
};

const breakpoints = [
  '768px', '1200px', '1500px'
];

const colors = {
  text: '#024',
  white: '#fff',
  black: '#000',
  serverlessRed: '#fd5750',
  darkServerlessRed: '#cb0a02',
  // nested objects work as well
  dark: {
    blue: '#058',
  },
  // arrays can be used for scales of colors
  gray: [
    '#f7f7f7',
    '#eaeaea',
    '#8c8c8c',
    '#5b5b5b',
  ],
};
colors.primaryColor = colors.serverlessRed;
colors.secondaryColor = colors.darkServerlessRed;

// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
// numbers are converted to px
const space = [
  10, 20, 30, 40, 60, 80
];
// typographic scale
const fontSizes = [
  '0.75rem', '0.875rem', '1rem',
  '1.125rem', '1.5rem', '2rem',
  '2.5rem', '3rem', '5.625rem',
];

// for any scale, either array or objects will work
const lineHeights = [
  1, 1.125, 1.25, 1.33,
  1.5, 2, 3, 7,
];

const fontWeights = {
  normal: 400,
  bold: 700,
};

const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  smallNegative: '-0.03px',
  primaryBtn: '0.05em',
  textField: '0.5px',
  text: '0.6px',
};

// border-radius
const radii = [
  0, 2, 4, 8,
];

const borders = [
  0, '1px solid', '2px solid', '3px solid',
];

const shadows = [
  `0 1px 2px 0 ${colors.text}`,
  `0 1px 4px 0 ${colors.text}`,
];

const theme = {
  font,
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borders,
  shadows,
};

export default theme;
