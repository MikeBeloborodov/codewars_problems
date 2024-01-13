import { remainder } from "./find_the_remainder";

describe("test cases", () => {
  it("should return 2", () => expect(remainder(17, 5)).toBe(2));
  it("should return 2", () => expect(remainder(5, 17)).toBe(2));
  it("should return NaN", () => expect(remainder(0, 1)).toBe(NaN));
});
