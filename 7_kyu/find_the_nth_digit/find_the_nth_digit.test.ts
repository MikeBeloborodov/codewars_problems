import { findDigit } from "./find_the_nth_digit";

describe("test cases", () => {
  it("should return 5", () => expect(findDigit(5673, 4)).toBe(5));
  it("should return 2", () => expect(findDigit(129, 2)).toBe(2));
  it("should return 0", () => expect(findDigit(-456, 4)).toBe(0));
  it("should return 0", () => expect(findDigit(0, 20)).toBe(0));
  it("should return -1", () => expect(findDigit(65, 0)).toBe(-1));
  it("should return -1", () => expect(findDigit(24, -8)).toBe(-1));
});
