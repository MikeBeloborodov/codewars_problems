export const switcher = (x: string[]) =>
  x
    .map((l) =>
      l === "27"
        ? "!"
        : l === "28"
          ? "?"
          : l === "29"
            ? " "
            : String.fromCharCode(123 - parseInt(l)),
    )
    .join("");
