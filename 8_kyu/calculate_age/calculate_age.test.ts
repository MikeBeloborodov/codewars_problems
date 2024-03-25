import { calculateAge } from "./calculate_age";

describe("Random test cases", function () {
  it("should return the right age", () =>
    expect(calculateAge(2012, 2016)).toBe("You are 4 years old."));
  it("should return the right age", () =>
    expect(calculateAge(1989, 2016)).toBe("You are 27 years old."));
  it("should return the right age", () =>
    expect(calculateAge(2000, 2090)).toBe("You are 90 years old."));
  it("should return the right age", () =>
    expect(calculateAge(2000, 1990)).toBe("You will be born in 10 years."));
});
