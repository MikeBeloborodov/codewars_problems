import { calculate } from "./basic_calculator";

describe("test cases", () => {
  it("should test", () => expect(calculate(3.2, "+", 8)).toBe(11.2));
  it("should test", () => expect(calculate(3.2, "-", 8)).toBe(-4.8));
  it("should test", () => expect(calculate(3.2, "/", 8)).toBe(0.4));
  it("should test", () => expect(calculate(3.2, "*", 8)).toBe(25.6));
  it("should test", () => expect(calculate(-3, "+", 0)).toBe(-3));
  it("should test", () => expect(calculate(-3, "-", 0)).toBe(-3));
  it("should test", () => expect(calculate(-3, "/", 0)).toBe(null));
  it("should test", () => expect(calculate(-2, "/", -2)).toBe(1));
  it("should test", () => expect(calculate(-2, "*", 0)).toBe(-0));
  it("should test", () => expect(calculate(-3, "w", 0)).toBe(null));
});
