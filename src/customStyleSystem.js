import { style } from 'styled-system';

const overflow = style({
  prop: 'o',
  cssProperty: 'overflow',
});

const overflowX = style({
  prop: 'ox',
  cssProperty: 'overflowX',
});

const overflowY = style({
  prop: 'oy',
  cssProperty: 'overflowY',
});

const align = style({
  prop: 'align',
  cssProperty: 'text-align',
});

const beforeBoxWidth = style({
  prop: 'beforeBoxWidth',
  cssProperty: 'width',
});

const afterBoxWidth = style({
  prop: 'afterBoxWidth',
  cssProperty: 'width',
});

const beforeBoxHeight = style({
  prop: 'beforeBoxHeight',
  cssProperty: 'height',
});

const afterBoxHeight = style({
  prop: 'afterBoxHeight',
  cssProperty: 'height',
});

const transition = style({
  prop: 'transition',
  cssProperty: 'transition',
});

const beforeBoxBorderWidth = style({
  prop: 'beforeBoxBorderWidth',
  cssProperty: 'border-width',
});

const afterBoxBorderWidth = style({
  prop: 'afterBoxBorderWidth',
  cssProperty: 'border-width',
});

const beforeBoxLeft = style({
  prop: 'beforeBoxLeft',
  cssProperty: 'left',
});

const afterBoxLeft = style({
  prop: 'afterBoxLeft',
  cssProperty: 'left',
});

const beforeBoxTop = style({
  prop: 'beforeBoxTop',
  cssProperty: 'top',
});

const afterBoxTop = style({
  prop: 'afterBoxTop',
  cssProperty: 'top',
});

const beforeBoxBackgroundColor = style({
  prop: 'beforeBoxBackgroundColor',
  cssProperty: 'background-color',
  key: 'colors',
});

const afterBoxBackgroundColor = style({
  prop: 'afterBoxBackgroundColor',
  cssProperty: 'background-color',
  key: 'colors',
});

const beforeBoxContent = style({
  prop: 'beforeBoxContent',
  cssProperty: 'content',
});

const afterBoxContent = style({
  prop: 'afterBoxContent',
  cssProperty: 'content',
});

const styleType = style({
  prop: 'styleType',
  cssProperty: 'list-style-type',
});

const horizontalRuleHeight = style({
  prop: 'height',
  cssProperty: 'border-top-width',
});

const horizontalRuleColor = style({
  prop: 'color',
  cssProperty: 'border-top-color',
  key: 'colors',
});

const placeholderColor = style({
  prop: 'placeholderColor',
  cssProperty: 'color',
  key: 'colors',
});

const placeholderFontFamily = style({
  prop: 'placeholderFontFamily',
  cssProperty: 'font-family',
});

const placeholderFontSize = style({
  prop: 'placeholderFontSize',
  cssProperty: 'font-size',
  key: 'fontSizes',
});

const placeholderFontWeight = style({
  prop: 'placeholderFontWeight',
  cssProperty: 'font-weight',
  key: 'fontWeights',
});

const placeholderFontStyle = style({
  prop: 'placeholderFontStyle',
  cssProperty: 'font-style',
});

const placeholderLineHeight = style({
  prop: 'placeholderLineHeight',
  cssProperty: 'line-height',
  key: 'lineHeights',
});

const placeholderLetterSpacing = style({
  prop: 'placeholderLetterSpacing',
  cssProperty: 'letter-spacing',
  key: 'letterSpacings',
});

const boxSizing = style({
  prop: 'boxSizing',
  cssProperty: 'box-sizing',
});

const objectFit = style({
  prop: 'objectFit',
  cssProperty: 'object-fit',
});

const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'text-decoration',
});

export {
  overflow,
  overflowX,
  overflowY,
  align,
  beforeBoxHeight,
  afterBoxHeight,
  beforeBoxWidth,
  afterBoxWidth,
  beforeBoxBorderWidth,
  afterBoxBorderWidth,
  beforeBoxLeft,
  afterBoxLeft,
  beforeBoxTop,
  afterBoxTop,
  beforeBoxBackgroundColor,
  afterBoxBackgroundColor,
  beforeBoxContent,
  afterBoxContent,
  transition,
  styleType,
  horizontalRuleHeight,
  horizontalRuleColor,
  placeholderColor,
  placeholderFontFamily,
  placeholderFontSize,
  placeholderFontStyle,
  placeholderFontWeight,
  placeholderLineHeight,
  placeholderLetterSpacing,
  boxSizing,
  objectFit,
  textDecoration,
};
