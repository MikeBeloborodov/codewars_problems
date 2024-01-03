import { snailSort } from "./snail_sort";

test("test case 1", () => {
  expect(snailSort([])).toStrictEqual([]);
});

test("test case 2", () => {
  expect(snailSort([[1]])).toStrictEqual([1]);
});

test("test case 3", () => {
  expect(
    snailSort([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
  ).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});
