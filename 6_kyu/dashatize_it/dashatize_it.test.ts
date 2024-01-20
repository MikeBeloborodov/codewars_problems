import { dashatize } from "./dashatize_it";

describe("test cases", () => {
  test("test case 1", () => {
    expect(dashatize(274)).toBe("2-7-4");
  });
  test("test case 2", () => {
    expect(dashatize(974302)).toBe("9-7-4-3-02");
  });
  test("test case 3", () => {
    expect(dashatize(5311)).toBe("5-3-1-1");
  });
  it("should return NaN", () => expect(dashatize("abc")).toBe("NaN"));
});
