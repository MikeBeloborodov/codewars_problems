import { ranking } from "./ranking_system";

describe("test cases", () => {
  it("should test", () =>
    expect(ranking([22, 33, 18, 9, 110, 4, 1, 88, 6, 50])).toStrictEqual([
      5, 4, 6, 7, 1, 9, 10, 2, 8, 3,
    ]));
  it("should test", () =>
    expect(ranking([10, 20, 40, 50, 30])).toStrictEqual([5, 4, 2, 1, 3]));
});
