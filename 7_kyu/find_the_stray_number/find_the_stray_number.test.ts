import { stray } from "./find_the_stray_number";

describe("test cases", () => {
  it("should return 2", () => expect(stray([1, 1, 2])).toBe(2));
  it("should return 3", () =>
    expect(stray([17, 17, 3, 17, 17, 17, 17])).toBe(3));
  it("should return 10", () => expect(stray([10, 2, 2, 2, 2, 2])).toBe(10));
  it("should return 5", () => expect(stray([3, 5, 3, 3, 3, 3])).toBe(5));
});
