import { uniTotal } from "./ascii_total";

describe("test cases", () => {
  it("should return 97", () => expect(uniTotal("a")).toBe(97));
  it("should return 291", () => expect(uniTotal("aaa")).toBe(291));
});
