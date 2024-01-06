import { listSquared } from "./list_squared";

describe("list squared tests", () => {
  it("should return [1,1]", () => {
    expect(listSquared(1, 2)).toStrictEqual([[1, 1]]);
  });
  it("should return [[42, 2500], [246, 84100]]", () => {
    expect(listSquared(42, 250)).toStrictEqual([
      [42, 2500],
      [246, 84100],
    ]);
  });
});
