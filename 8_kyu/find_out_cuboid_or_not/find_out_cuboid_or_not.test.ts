import { cubeChecker } from "./find_out_cuboid_or_not";

describe("test cases", () => {
  it("should return false ", () => expect(cubeChecker(56.3, 1)).toBe(false));
  it("should return false", () => expect(cubeChecker(-1, 2)).toBe(false));
  it("should return false", () => expect(cubeChecker(8, 3)).toBe(false));
  it("should return true", () => expect(cubeChecker(8, 2)).toBe(true));
  it("should return false", () => expect(cubeChecker(0, 0)).toBe(false));
  it("should return false", () => expect(cubeChecker(-8, -2)).toBe(false));
});
