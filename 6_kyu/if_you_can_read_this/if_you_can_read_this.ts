const NATO: any = Object.freeze({
  A: "Alfa",
  N: "November",
  B: "Bravo",
  O: "Oscar",
  C: "Charlie",
  P: "Papa",
  D: "Delta",
  Q: "Quebec",
  E: "Echo",
  R: "Romeo",
  F: "Foxtrot",
  S: "Sierra",
  G: "Golf",
  T: "Tango",
  H: "Hotel",
  U: "Uniform",
  I: "India",
  V: "Victor",
  J: "Juliett",
  W: "Whiskey",
  K: "Kilo",
  X: "Xray",
  L: "Lima",
  Y: "Yankee",
  M: "Mike",
  Z: "Zulu",
});

export const toNato = (words: string): string =>
  words
    .split(" ")
    .join("")
    .split("")
    .map((w) => (",.!?".includes(w) ? w : NATO[w.toUpperCase()]))
    .join(" ");
