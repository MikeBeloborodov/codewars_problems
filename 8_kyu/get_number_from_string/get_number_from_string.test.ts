import { getNumberFromString } from "./get_number_from_string";

describe("test cases", () => {
  it("should return 1", () => expect(getNumberFromString("1")).toBe(1));
  it("should return 123", () => expect(getNumberFromString("123")).toBe(123));
  it("should return 7", () =>
    expect(getNumberFromString("this is number: 7")).toBe(7));
});
