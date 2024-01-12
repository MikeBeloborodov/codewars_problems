export const incrementString = (s: string): string => {
  const regexp = /(?=[\w])0?[1-9]*$/gi;
  if (regexp.test(s)) {
    return s.replace(regexp, (match) => {
      const incremented = (parseInt(match) + 1).toString();
      if (match.length <= incremented.length) {
        return incremented;
      } else {
        return "0" + incremented;
      }
    });
  } else {
    return s + "1";
  }
};
