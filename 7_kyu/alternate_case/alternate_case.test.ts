import { alternateCase } from "./alternate_case";

describe("test cases", () => {
  it("should return ABC", () => expect(alternateCase("abc")).toBe("ABC"));
  it("should return HeLlO", () => expect(alternateCase("hElLo")).toBe("HeLlO"));
});
