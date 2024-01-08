import { reverseWords } from "./reverse_words";

test("test case 1", () => {
  expect(reverseWords("The quick brown fox jumps over the lazy dog.")).toBe(
    "ehT kciuq nworb xof spmuj revo eht yzal .god",
  );
});

test("test case 2", () => {
  expect(reverseWords("apple")).toBe("elppa");
});

test("test case 3", () => {
  expect(reverseWords("a b c d")).toBe("a b c d");
});

test("test case 4", () => {
  expect(reverseWords("double  spaced  words")).toBe("elbuod  decaps  sdrow");
});
