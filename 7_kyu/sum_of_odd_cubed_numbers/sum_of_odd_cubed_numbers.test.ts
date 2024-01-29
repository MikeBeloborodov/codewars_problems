import { cubeOdd } from "./sum_of_odd_cubed_numbers";

describe("test cases", () => {
  it("should return 28", () => expect(cubeOdd([1, 2, 3, 4])).toBe(28));
  it("should return 0", () => expect(cubeOdd([-3, -2, 2, 3])).toBe(0));
  it("should return undefined", () =>
    expect(cubeOdd(["a", 12, 9, "z", 42])).toBe(undefined));
});
