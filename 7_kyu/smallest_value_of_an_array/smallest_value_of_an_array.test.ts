import { min } from "./smallest_value_of_an_array";

describe("test cases", () => {
  it("should return 1", () => expect(min([1, 2, 3, 4, 5], "value")).toBe(1));
  it("should return 0", () => expect(min([1, 2, 3, 4, 5], "index")).toBe(0));
  it("should return 3", () => expect(min([4, 5, 6, 3, 8], "value")).toBe(3));
});
