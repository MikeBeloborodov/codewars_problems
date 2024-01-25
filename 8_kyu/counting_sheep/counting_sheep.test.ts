import { countSheeps } from "./counting_sheep";

describe("test cases", () => {
  it("should return 0", () => expect(countSheeps([])).toBe(0));
  it("should return 0", () => expect(countSheeps([undefined])).toBe(0));
  it("should return 1", () => expect(countSheeps([true])).toBe(1));
  it("should return 1", () =>
    expect(countSheeps([true, undefined, null, false])).toBe(1));
});
