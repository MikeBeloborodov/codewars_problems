import { partlist } from "./parts_of_a_list";

describe("test cases", () => {
  it("should test", () =>
    expect(partlist(["I", "wish", "I", "hadn't", "come"])).toStrictEqual([
      ["I", "wish I hadn't come"],
      ["I wish", "I hadn't come"],
      ["I wish I", "hadn't come"],
      ["I wish I hadn't", "come"],
    ]));
});
