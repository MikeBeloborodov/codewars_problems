export const validateCode = (code: number): boolean =>
  /^[1-3]/g.test(code.toString());
