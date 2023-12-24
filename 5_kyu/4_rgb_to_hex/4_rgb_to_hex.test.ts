import { hexToRgb } from "./4_rgb_to_hex";

test("test case 1", () => {
  expect(hexToRgb(255, 255, 255)).toBe("FFFFFF");
});

test("test case 2", () => {
  expect(hexToRgb(0, 0, 0)).toBe("000000");
});

test("test case 3", () => {
  expect(hexToRgb(255, 255, 300)).toBe("FFFFFF");
});

test("test case 4", () => {
  expect(hexToRgb(148, 0, 211)).toBe("9400D3");
});

test("test case 5", () => {
  expect(hexToRgb(0, 0, -20)).toBe("000000");
});
