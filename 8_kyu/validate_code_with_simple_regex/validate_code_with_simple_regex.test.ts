import { validateCode } from "./validate_code_with_simple_regex";

describe("test cases", () => {
  it("should return true", () => expect(validateCode(123)).toBe(true));
  it("should return true", () => expect(validateCode(248)).toBe(true));
  it("should return true", () => expect(validateCode(321)).toBe(true));
  it("should return false", () => expect(validateCode(4923123)).toBe(false));
  it("should return false", () => expect(validateCode(923123)).toBe(false));
});
