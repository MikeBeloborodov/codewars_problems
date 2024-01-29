import { sumTriangularNumbers } from "./sum_of_triangular_numbers";

describe("test cases", () => {
  it("should return 56", () => expect(sumTriangularNumbers(6)).toBe(56));
  it("should return 7140", () => expect(sumTriangularNumbers(34)).toBe(7140));
  it("should return 0", () => expect(sumTriangularNumbers(-291)).toBe(0));
  it("should return big number", () =>
    expect(sumTriangularNumbers(943)).toBe(140205240));
});
