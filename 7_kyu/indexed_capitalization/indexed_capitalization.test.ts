import { capitalize } from "./indexed_capitalization";

describe("test cases", () => {
  it("should return aBCdeF", () =>
    expect(capitalize("abcdef", [1, 2, 5])).toBe("aBCdeF"));
});
