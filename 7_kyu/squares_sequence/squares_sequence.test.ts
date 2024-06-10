import { squares } from "./squares_sequence";

describe("test cases", () => {
  it("should return [3, 9, 81]", () =>
    expect(squares(3, 3)).toStrictEqual([3, 9, 81]));
  it("should return []", () => expect(squares(3, -1)).toStrictEqual([]));
});
