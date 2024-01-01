import { maxRot } from "./rotate_for_max";

test("case1", () => {
  expect(maxRot(38458215)).toBe(85821534);
});

test("case2", () => {
  expect(maxRot(896219342)).toBe(962193428);
});
