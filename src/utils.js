import { css } from 'styled-components'

const hexToRgbA = (hex, transparency)=>{
  var c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('');
      if(c.length== 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+transparency+')';
  }
  throw new Error('Bad Hex');
}

const sizes = {
  lg: 1200,
  md: 992,
  sm: 768,
}

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const size = sizes[label]
  accumulator[label] = (...args) => css`
    @media (min-width: ${size}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export {
  hexToRgbA,
  media
}