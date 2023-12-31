import { directionReduction } from "./directions_reduction";

test("test case 1", () => {
  expect(directionReduction([]));
});

test("test case 2", () => {
  expect(
    directionReduction(["NORTH", "WEST", "SOUTH", "EAST"]).toString(),
  ).toBe(["NORTH", "WEST", "SOUTH", "EAST"].toString());
});

test("test case 3", () => {
  expect(
    directionReduction([
      "NORTH",
      "SOUTH",
      "SOUTH",
      "EAST",
      "WEST",
      "NORTH",
      "WEST",
    ]).toString(),
  ).toBe(["WEST"].toString());
});

test("test case 4", () => {
  expect(
    directionReduction(["NORTH", "WEST", "SOUTH", "EAST"]).toString(),
  ).toBe(["NORTH", "WEST", "SOUTH", "EAST"].toString());
});

test("test case 5", () => {
  expect(
    directionReduction([
      "NORTH",
      "SOUTH",
      "EAST",
      "WEST",
      "EAST",
      "WEST",
    ]).toString(),
  ).toBe([].toString());
});
