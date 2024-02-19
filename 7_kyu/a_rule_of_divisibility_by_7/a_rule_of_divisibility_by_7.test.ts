import { seven } from "./a_rule_of_divisibility_by_7";

describe("test cases", () => {
  it("should return [10, 2]", () => expect(seven(1021)).toStrictEqual([10, 2]));
  it("should return [7, 2]", () => expect(seven(1603)).toStrictEqual([7, 2]));
  it("should return [35, 1]", () => expect(seven(371)).toStrictEqual([35, 1]));
});
