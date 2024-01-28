import { reverse } from "./esrever";

describe("test cases", () => {
  it("should return [3,2,1]", () =>
    expect(reverse([1, 2, 3])).toStrictEqual([3, 2, 1]));
  it("should test", () =>
    expect(reverse([1, null, 14, "two"])).toStrictEqual(["two", 14, null, 1]));
});
