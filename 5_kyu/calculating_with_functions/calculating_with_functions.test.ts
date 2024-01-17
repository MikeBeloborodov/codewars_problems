import {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
} from "./calculating_with_functions";

describe("test cases", () => {
  it("should return 35", () => expect(seven(times(five()))).toBe(35));
  it("should return 13", () => expect(four(plus(nine()))).toBe(13));
  it("should return 5", () => expect(eight(minus(three()))).toBe(5));
  it("should return 3", () => expect(six(dividedBy(two()))).toBe(3));
  it("should return 1", () => expect(one(minus(zero()))).toBe(1));
  it("should return 0", () => expect(two(dividedBy(six()))).toBe(0));
});
