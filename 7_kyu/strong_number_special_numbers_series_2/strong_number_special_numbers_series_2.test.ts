import { strong } from "./strong_number_special_numbers_series_2";

describe("Fixed Tests", () => {
  it("Testing for 1", () => expect(strong(1)).toBe("STRONG!!!!"));
  it("Testing for 2", () => expect(strong(2)).toBe("STRONG!!!!"));
  it("Testing for 145", () => expect(strong(145)).toBe("STRONG!!!!"));
  it("Testing for 7", () => expect(strong(7)).toBe("Not Strong !!"));
});
