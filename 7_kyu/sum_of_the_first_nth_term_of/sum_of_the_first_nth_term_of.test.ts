import { SeriesSum } from "./sum_of_the_first_nth_term_of";

describe("test cases", () => {
  it("should return 1.00", () => expect(SeriesSum(1)).toBe("1.00"));
  it("should return 0.00", () => expect(SeriesSum(0)).toBe("0.00"));
  it("should return 1.49", () => expect(SeriesSum(4)).toBe("1.49"));
});
