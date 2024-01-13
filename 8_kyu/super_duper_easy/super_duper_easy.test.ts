import { superDuperEasy } from "./super_duper_easy";

describe("test cases", () => {
  it("should return error ", () =>
    expect(superDuperEasy("hello")).toBe("Error"));
  it("should 56", () => expect(superDuperEasy(1)).toBe(56));
});
