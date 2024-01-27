import { maxSequence } from "./maximum_subarray_sum";

describe("test cases", () => {
  it("should return 155", () =>
    expect(
      maxSequence([
        7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
      ]),
    ).toBe(155));
  it("should return 0", () => expect(maxSequence([])).toBe(0));
});
