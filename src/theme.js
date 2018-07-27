const defaultFont = 'Serverless';

const breakpoints = [
  '40em', '52em', '64em'
]

const colors = {
  text: '#024',
  white : '#fff',
  blue: '#07c',
  serverlessRed : '#fd5750',
  darkServerlessRed : '#cb0a02',
  // nested objects work as well
  dark: {
    blue: '#058'
  },
  // arrays can be used for scales of colors
  gray: [
    '#333',
    '#666',
    '#8c8c8c',
    '#999',
    '#ccc',
    '#eee',
    '#f6f6f6',
    '#5b5b5b',
  ]
}
colors.primaryColor = colors.serverlessRed;
colors.secondaryColor = colors.darkServerlessRed;

// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
// numbers are converted to px
const space = [
  0, 4, 8, 16, 32, 64, 128, 256, 512
]
// typographic scale
const fontSizes = [
  12, 14, 16, 18, 20, 24, 32, 48, 64, 96, 128
]

// for any scale, either array or objects will work
const lineHeights = [
  1, 1.125, 1.25, 1.33, 1.5, 1.67
]

const fontWeights = {
  normal: 500,
  bold: 700
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  smallNegative: '-0.03px',
  negative: '-0.5px',
  primaryBtn: '0.05em',
}

// border-radius
const radii = [
  0, 2, 4, 8
]

const borders = [
  0, '1px solid', '2px solid', '3px solid'
]

const shadows = [
  `0 1px 2px 0 ${colors.text}`,
  `0 1px 4px 0 ${colors.text}`
]

const theme = {
  defaultFont,
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borders,
  shadows
}

export default theme