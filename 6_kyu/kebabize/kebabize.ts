export const kebabize = (str: string): string =>
  str
    .split(/(?=[A-Z])/g)
    .map((i) => i.replace(/[^A-Za-z]/g, "").toLowerCase())
    .join("-");
