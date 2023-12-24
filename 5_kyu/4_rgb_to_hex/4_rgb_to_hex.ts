/*
  https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

  The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
  * */
const returnHexString = (num: number): string => {
  return num.toString(16).toUpperCase();
};

const constrainNumberToMinMaxRGB = (num: number): number => {
  return Math.max(0, Math.min(255, num));
};

const addZeroToHex = (hexStr: string): string => {
  return "0" + hexStr;
};

const formatHexString = (hexStr: string): string => {
  return hexStr.length === 1 ? addZeroToHex(hexStr) : hexStr;
};

const stringifyRgbNumber = (num: number): string => {
  const rgbNum = constrainNumberToMinMaxRGB(num);
  const hexString = returnHexString(rgbNum);
  return formatHexString(hexString);
};

export const hexToRgb = (r: number, g: number, b: number): string => {
  return `${stringifyRgbNumber(r)}${stringifyRgbNumber(g)}${stringifyRgbNumber(
    b,
  )}`;
};
