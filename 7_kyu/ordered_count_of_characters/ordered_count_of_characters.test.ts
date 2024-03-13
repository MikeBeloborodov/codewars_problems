import { orderedCount } from "./ordered_count_of_characters";

describe("test cases", () => {
  it("should test", () =>
    expect(orderedCount("abracadabra")).toStrictEqual([
      ["a", 5],
      ["b", 2],
      ["r", 2],
      ["c", 1],
      ["d", 1],
    ]));
});
