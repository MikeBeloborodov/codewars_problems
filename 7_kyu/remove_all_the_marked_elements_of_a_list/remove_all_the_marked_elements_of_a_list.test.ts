import { rmMarkedElements } from "./remove_all_the_marked_elements_of_a_list";

describe("test cases", () => {
  it("should return [1,2,3]", () =>
    expect(rmMarkedElements([1, 2, 3, 4, 5, 6], [4, 5, 6])).toStrictEqual([
      1, 2, 3,
    ]));
});
