import { isPowerOfTwo } from "./power_of_two";

describe("test cases", () => {
  it("should return true", () => expect(isPowerOfTwo(2)).toBe(true));
  it("should return false", () => expect(isPowerOfTwo(5)).toBe(false));
  it("should return true", () => expect(isPowerOfTwo(4096)).toBe(true));
  it("should return true", () => expect(isPowerOfTwo(1)).toBe(true));
});
