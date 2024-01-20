export const pigIt = (str: string) => {
  return str
    .split(" ")
    .map((item) =>
      new RegExp(/[a-zA-Z]+/).test(item)
        ? item.slice(1) + item[0] + "ay"
        : item,
    )
    .join(" ");
};
