import { twoHighest } from "./return_two_highest_values_in_list";

describe("test cases", () => {
  it("should return []", () => expect(twoHighest([])).toStrictEqual([]));
  it("should return [15]", () => expect(twoHighest([15])).toStrictEqual([15]));
  it("should return [15,14]", () =>
    expect(twoHighest([15, 14, 13])).toStrictEqual([15, 14]));
});
