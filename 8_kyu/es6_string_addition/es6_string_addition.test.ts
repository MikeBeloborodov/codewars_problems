import { joinStrings } from "./es6_string_addition";

describe("test cases", () => {
  it("should return concat strings", () =>
    expect(joinStrings("string1", "string2")).toBe("string1 string2"));
  it("should return 123 234", () =>
    expect(joinStrings(134, 234)).toBe("134 234"));
});
