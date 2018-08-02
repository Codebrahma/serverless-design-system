import { style } from 'styled-system'

const overflow = style({
  prop: 'o',
  cssProperty: 'overflow',
  transformValue: val => val
});

const overflowX = style({
  prop: 'ox',
  cssProperty: 'overflowX',
  transformValue: val => val
});

const overflowY = style({
  prop: 'oy',
  cssProperty: 'overflowY',
  transformValue: val => val
});

export {
  overflow,
  overflowX,
  overflowY
};
