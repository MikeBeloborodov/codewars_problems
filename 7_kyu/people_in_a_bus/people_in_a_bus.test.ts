import { peopleNumber } from "./people_in_a_bus";

test("test case 1", () => {
  expect(
    peopleNumber([
      [10, 0],
      [3, 5],
      [5, 8],
    ]),
  ).toBe(5);
});

test("test case 2", () => {
  expect(
    peopleNumber([
      [3, 0],
      [9, 1],
      [4, 10],
      [12, 2],
      [6, 1],
      [7, 10],
    ]),
  ).toStrictEqual(17);
});

test("test case 3", () => {
  expect(
    peopleNumber([
      [3, 0],
      [9, 1],
      [4, 8],
      [12, 2],
      [6, 1],
      [7, 8],
    ]),
  ).toStrictEqual(21);
});
