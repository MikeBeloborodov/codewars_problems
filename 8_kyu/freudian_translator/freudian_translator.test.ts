import { toFreud } from "./freudian_translator";

describe("test cases", () => {
  it("should test", () => expect(toFreud("")).toBe(""));
  it("should test", () => expect(toFreud("test")).toBe("sex"));
  it("should test", () =>
    expect(toFreud("You're becoming a true freudian expert")).toBe(
      "sex sex sex sex sex sex",
    ));
});
