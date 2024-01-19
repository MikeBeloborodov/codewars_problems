export const cookie = (x: any) => {
  return `Who ate the last cookie? It was ${
    typeof x === "string"
      ? "Zach"
      : typeof x === "number"
        ? "Monica"
        : "the dog"
  }!`;
};
