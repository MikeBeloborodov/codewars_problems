import { capitalize } from "./alternate_capitalization";

describe("test cases", () => {
  it("should return ['AbCdEf', 'aBcDeF']", () =>
    expect(capitalize("abcdef")).toStrictEqual(["AbCdEf", "aBcDeF"]));
  it("should return ['CoDeWaRs', 'cOdEwArS']", () =>
    expect(capitalize("codewars")).toStrictEqual(["CoDeWaRs", "cOdEwArS"]));
  it("should return ['CoDeWaRrIoRs', 'cOdEwArRiOrS']", () =>
    expect(capitalize("codewarriors")).toStrictEqual([
      "CoDeWaRrIoRs",
      "cOdEwArRiOrS",
    ]));
});
