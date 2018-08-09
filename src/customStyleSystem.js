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
  beforeBoxBackgroundColor,
  afterBoxBackgroundColor,
  beforeBoxContent,
  afterBoxContent,
  transition
};
