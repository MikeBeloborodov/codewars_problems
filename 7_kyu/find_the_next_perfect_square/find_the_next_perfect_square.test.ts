import { findNextSquare } from "./find_the_next_perfect_square";

describe("test cases", () => {
  it("should return -1", () => expect(findNextSquare(151)).toBe(-1));
  it("should return 144", () => expect(findNextSquare(121)).toBe(144));
});
