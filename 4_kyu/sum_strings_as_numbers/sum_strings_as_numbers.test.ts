import { sumStrings } from "./sum_strings_as_numbers";

describe("test cases", () => {
  test("test case 1", () => {
    expect(sumStrings("1234", "567")).toBe("1801");
  });
  test("test case 2", () => {
    expect(sumStrings("8797", "45")).toBe("8842");
  });
  test("test case 3", () => {
    expect(sumStrings("00103", "08567")).toBe("8670");
  });
  it("should return 1010", () => expect(sumStrings("10", "1000")).toBe("1010"));
  it("should return 1000", () => expect(sumStrings("1", "999")).toBe("1000"));
});
