import { removeUrlAnchor } from "./remove_anchor";

describe("test cases", () => {
  it("should return www.codewars.com", () =>
    expect(removeUrlAnchor("www.codewars.com#about")).toBe("www.codewars.com"));
});
