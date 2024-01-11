import { sortByLength } from "./sort_array_by_string_length";

describe("Example tests", function () {
  it("Test 1", function () {
    expect(sortByLength(["Beg", "Life", "I", "To"])).toStrictEqual([
      "I",
      "To",
      "Beg",
      "Life",
    ]);
  });
  it("Test 2", function () {
    expect(sortByLength(["", "Moderately", "Brains", "Pizza"])).toStrictEqual([
      "",
      "Pizza",
      "Brains",
      "Moderately",
    ]);
  });
  it("Test 3", function () {
    expect(sortByLength(["Longer", "Longest", "Short"])).toStrictEqual([
      "Short",
      "Longer",
      "Longest",
    ]);
  });
});
