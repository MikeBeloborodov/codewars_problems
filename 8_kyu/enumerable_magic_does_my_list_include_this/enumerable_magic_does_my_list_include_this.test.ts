import { include } from "./enumerable_magic_does_my_list_include_this";

describe("test cases", () => {
  it("should return true", () => expect(include([1, 2, 3, 4], 3)).toBe(true));
});
