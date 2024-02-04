import { fuelPrice } from "./fuel_calculator_total_cost";

describe("test cases", () => {
  it("should return 5.65", () => expect(fuelPrice(5, 1.23)).toBe(5.65));
  it("should return 10", () => expect(fuelPrice(10, 1.25)).toBe(10));
});
