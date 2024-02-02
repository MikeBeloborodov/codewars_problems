import { stringClean } from "./string_cleaning";

describe("test cases", () => {
  it("should return abc", () => expect(stringClean("a1b2c3")).toBe("abc"));
  it("should return empty string", () => expect(stringClean("123")).toBe(""));
  it("should return hello!@#$%^", () =>
    expect(stringClean("hello!@#$%^1234567890")).toBe("hello!@#$%^"));
});
