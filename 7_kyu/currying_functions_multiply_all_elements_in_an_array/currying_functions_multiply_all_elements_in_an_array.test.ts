import { multiplyAll } from "./currying_functions_multiply_all_elements_in_an_array";

describe("test cases", () => {
  it("should return [2,4,6]", () =>
    expect(multiplyAll([1, 2, 3])(2)).toStrictEqual([2, 4, 6]));
});
