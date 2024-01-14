import { breakCamelCase } from "./break_camel_case";

describe("test cases", () => {
  it("should return camel Casing", () =>
    expect(breakCamelCase("camelCasing")).toBe("camel Casing"));
  it("should return camel Casing Test", () =>
    expect(breakCamelCase("camelCasingTest")).toBe("camel Casing Test"));
});
