import { longestConsec } from "./consecutive_strings";

describe("test cases", () => {
  it("should return abigailtheta", () =>
    expect(
      longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
    ).toBe("abigailtheta"));
  it("should return empty", () =>
    expect(
      longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2),
    ).toBe(""));
  it("should return empty", () =>
    expect(
      longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0),
    ).toBe(""));
  it("should return oocccffuucccjjjkkkjyyyeehh", () =>
    expect(
      longestConsec(
        [
          "ejjjjmmtthh",
          "zxxuueeg",
          "aanlljrrrxx",
          "dqqqaaabbb",
          "oocccffuucccjjjkkkjyyyeehh",
        ],
        1,
      ),
    ).toBe("oocccffuucccjjjkkkjyyyeehh"));
});
