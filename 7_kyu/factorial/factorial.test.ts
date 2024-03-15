import { factorial } from "./factorial";

describe("test cases", () => {
  it("should return 1", () => expect(factorial(0)).toBe(1));
  it("should return 1", () => expect(factorial(1)).toBe(1));
  it("should return 2", () => expect(factorial(2)).toBe(2));
  it("should return 6", () => expect(factorial(3)).toBe(6));
  it("should throw RangeError", () =>
    expect(() => factorial(-1)).toThrow(RangeError));
  it("should throw RangeError", () =>
    expect(() => factorial(20)).toThrow(RangeError));
});
