import { calculateTip } from "./tip_calculator";

describe("test cases", () => {
  it("should return 4", () => expect(calculateTip(20, "Excellent")).toBe(4));
  it("should return 3", () => expect(calculateTip(26.95, "good")).toBe(3));
  it("should return not recognized", () =>
    expect(calculateTip(50, "abcd")).toBe("Rating not recognised"));
});
