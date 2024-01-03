import { nextBigger } from "./next_bigger_number";

test("test case 1", () => {
  expect(nextBigger(12)).toBe(21);
});

test("test case 2", () => {
  expect(nextBigger(513)).toBe(531);
});

test("test case 3", () => {
  expect(nextBigger(2017)).toBe(2071);
});

test("test case 4", () => {
  expect(nextBigger(9)).toBe(-1);
});

test("test case 5", () => {
  expect(nextBigger(111)).toBe(-1);
});

test("test case 6", () => {
  expect(nextBigger(531)).toBe(-1);
});

test("test case 7", () => {
  expect(nextBigger(144)).toBe(414);
});

test("test case 8", () => {
  expect(nextBigger(59884848459853)).toBe(59884848483559);
});
