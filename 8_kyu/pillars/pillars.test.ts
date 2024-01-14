import { pillars } from "./pillars";

describe("test cases", () => {
  it("should return 0", () => expect(pillars(1, 10, 10)).toBe(0));
  it("should return 2000", () => expect(pillars(2, 20, 25)).toBe(2000));
  it("should return 15270", () => expect(pillars(11, 15, 30)).toBe(15270));
});
