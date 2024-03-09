import { toNumberArray } from "./convert_an_array_of_strings_to_array_of_numbers";

describe("test cases", () => {
  it("should test", () =>
    expect(toNumberArray(["1.1", "2.2", "3.3"])).toStrictEqual([
      1.1, 2.2, 3.3,
    ]));
});
