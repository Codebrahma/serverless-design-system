'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hexToRgbA = function hexToRgbA(hex, transparency) {
  var c = void 0;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return 'rgba(' + [c >> 16 & 255, c >> 8 & 255, c & 255].join(',') + ',' + transparency + ')';
  }
  throw new Error('Bad Hex');
};

exports.hexToRgbA = hexToRgbA; // eslint-disable-line