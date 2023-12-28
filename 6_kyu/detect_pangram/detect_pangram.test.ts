import { isPangram } from "./detect_pangram";

test("case1", () => {
  expect(
    isPangram("The quick brown fox jumps over the lazy dog."),
  ).toBeTruthy();
});

test("case2", () => {
  expect(isPangram("This is not pangram")).toBeFalsy();
});
