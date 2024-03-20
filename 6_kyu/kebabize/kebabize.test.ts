import { kebabize } from "./kebabize";

describe("test cases", () => {
  it("should return my-camel-cased-string", () =>
    expect(kebabize("MyCamelCasedString")).toBe("my-camel-cased-string"));
  it("should return my-camel-has-humps", () =>
    expect(kebabize("MyCamelHas3Humps")).toBe("my-camel-has-humps"));
});
