export const abbreviate = (str: string) =>
  str
    .split(/(\w+|\W|\s)/)
    .filter((item) => item)

    .map((item) =>
      /\w+/g.test(item) && item.length > 3
        ? item[0] + (item.length - 2).toString() + item[item.length - 1]
        : item,
    )
    .join("");
