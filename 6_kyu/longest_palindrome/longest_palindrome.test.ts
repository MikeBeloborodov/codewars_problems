import { longestPalindrome } from "./longest_palindrome";

describe("test cases", () => {
  it("should return 1", () => expect(longestPalindrome("a")).toBe(1));
  it("should return 2", () => expect(longestPalindrome("aa")).toBe(2));
  it("should return 2", () => expect(longestPalindrome("aab")).toBe(2));
  it("should return 7", () =>
    expect(longestPalindrome("I like racecars that go fast")).toBe(7));
  it("should return 85", () =>
    expect(
      longestPalindrome(
        "LSUo6pyBTLgD5yaT3QjjrjNrL9sHjBEBZqQ3NWOmTxBxTmOWN3QqZBEBjHs9LrNjrjjQ3Tay5DgLTByp6oUSL",
      ),
    ).toBe(85));
  it("should return 0", () => expect(longestPalindrome("")).toBe(0));
});
