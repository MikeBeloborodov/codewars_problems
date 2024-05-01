import { logicalCalc } from "./logical_calculator";

describe("test cases", () => {
  it("should return false", () =>
    expect(logicalCalc([true, true, true, false], "AND")).toBe(false));
  it("should return true", () =>
    expect(logicalCalc([true, true, true, false], "OR")).toBe(true));
  it("should return true", () =>
    expect(logicalCalc([true, true, true, false], "XOR")).toBe(true));
  it("should return true", () =>
    expect(logicalCalc([false, true, true, true], "OR")).toBe(true));
});
