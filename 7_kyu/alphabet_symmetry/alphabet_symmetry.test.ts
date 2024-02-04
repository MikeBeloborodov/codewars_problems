import { solve } from "./alphabet_symmetry";

describe("test cases", () => {
  it("should return [4,3,1]", () =>
    expect(solve(["abode", "ABc", "xyzD"])).toStrictEqual([4, 3, 1]));
});
