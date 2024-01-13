import { derive } from "./take_the_derivative";

describe("test cases", () => {
  it("should return 56x^7", () => expect(derive(7, 8)).toBe("56x^7"));
  it("should return 45x^8", () => expect(derive(5, 9)).toBe("45x^8"));
});
