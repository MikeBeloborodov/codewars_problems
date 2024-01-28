import { nbMonths } from "./buying_a_car";

describe("test cases", () => {
  it("should return [6, 766]", () =>
    expect(nbMonths(2000, 8000, 1000, 1.5)).toStrictEqual([6, 766]));
  it("should return [0, 4000]", () =>
    expect(nbMonths(12000, 8000, 1000, 1.5)).toStrictEqual([0, 4000]));
});
