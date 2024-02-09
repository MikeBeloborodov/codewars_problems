import { check } from "./no_loop_you_only_need_one";

describe("test cases", () => {
  it("should return true", () => expect(check([66, 101], 66)).toBe(true));
  it("should return true", () =>
    expect(check([80, 117, 115, 104, 45, 85, 112, 115], 45)).toBe(true));
  it("should return false", () =>
    expect(check(["what", "a", "great", "kata"], "kat")).toBe(false));
});
