import { pyramid } from "./pyramid_array";

test("test case 1", () => {
  expect(JSON.stringify(pyramid(0))).toBe(JSON.stringify([]));
});

test("test case 2", () => {
  expect(JSON.stringify(pyramid(1))).toBe(JSON.stringify([[1]]));
});

test("test case 3", () => {
  expect(JSON.stringify(pyramid(2))).toBe(JSON.stringify([[1], [1, 1]]));
});

test("test case 4", () => {
  expect(JSON.stringify(pyramid(3))).toBe(
    JSON.stringify([[1], [1, 1], [1, 1, 1]]),
  );
});
