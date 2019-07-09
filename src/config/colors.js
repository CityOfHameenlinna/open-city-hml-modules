/* @flow */
export type ColorSet = {
  max: string,
  med: string,
  min: string,
  homefg: string,
  homebg: string,
}

//Colors based on HML brand
const colors: ColorSet = {
  max: '#1E3250', //Blue 'Sininen virta'
  med: '#F77952', //Orange 'Tiili'
  min: '#FFFFFF', //White
  homefg: '#F77952', //Orange 'Tiili'
  homebg: '#FFFFFF', //White
};

export default colors;