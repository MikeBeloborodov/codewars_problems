import { towerBuilder } from "./build_tower";

describe("tower builder tests", () => {
  it("should return a 1 floor tower", () => {
    expect(towerBuilder(1)).toStrictEqual(["*"]);
  });
  it("should return a 2 floors tower", () => {
    expect(towerBuilder(2)).toStrictEqual([" * ", "***"]);
  });
  it("should return a 3 floors tower", () => {
    expect(towerBuilder(3)).toStrictEqual(["  *  ", " *** ", "*****"]);
  });
});
