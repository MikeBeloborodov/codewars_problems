import { lowercaseCount } from "./regex_count_lowercase_letters";

describe("test cases", () => {
  it("should return 3", () => expect(lowercaseCount("abc")).toBe(3));
  it("should return 0", () => expect(lowercaseCount("")).toBe(0));
  it("should return 3", () =>
    expect(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")).toBe(3));
});
