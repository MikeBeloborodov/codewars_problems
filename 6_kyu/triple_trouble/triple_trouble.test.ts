import { tripledouble } from "./triple_trouble";

test("test case 1", () => {
  expect(tripledouble(451999277, 41177722899)).toBe(1);
});

test("test case 2", () => {
  expect(tripledouble(1222345, 12345)).toBe(0);
});

test("test case 3", () => {
  expect(tripledouble(666789, 12345667)).toBe(1);
});

test("tst case 4", () => {
  expect(tripledouble(1112, 122)).toBe(0);
});
