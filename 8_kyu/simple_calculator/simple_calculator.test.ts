import { calculator } from "./simple_calculator";

describe("test cases", () => {
  it("should return 3", () => expect(calculator(1, 2, "+")).toBe(3));
  it("should return -1", () => expect(calculator(1, 2, "-")).toBe(-1));
  it("should return 15", () => expect(calculator(3, 5, "*")).toBe(15));
  it("should return 3", () => expect(calculator(6, 2, "/")).toBe(3));
  it("should unknown", () =>
    expect(calculator(6, 2, "$")).toBe("unknown value"));
});
