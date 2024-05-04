import { unluckyDays } from "./unlucky_days";

describe("test cases", () => {
  it("should return 1", () => expect(unluckyDays(1586)).toBe(1));
  it("should return 3", () => expect(unluckyDays(1001)).toBe(3));
});
