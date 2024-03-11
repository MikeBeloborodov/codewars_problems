export const rot13 = (message: string): string => {
  return message
    .split("")
    .map((char) => {
      if (!/[A-Za-z]/.test(char)) return char;

      const charCode = char.charCodeAt(0);
      if (char.toUpperCase() === char) {
        return charCode + 13 < 91
          ? String.fromCharCode(charCode + 13)
          : String.fromCharCode(charCode + 13 - 90 + 64);
      } else {
        return charCode + 13 < 123
          ? String.fromCharCode(charCode + 13)
          : String.fromCharCode(charCode + 13 - 122 + 96);
      }
    })
    .join("");
};
