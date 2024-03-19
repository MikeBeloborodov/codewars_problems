import { replace } from "./vowel_to_exclamation";

describe("vowel to exclamation tests", () => {
  it("should return H!!", () => {
    expect(replace("Hi!")).toBe("H!!");
  });
  it("should return !BCD!", () => {
    expect(replace("ABCDE")).toBe("!BCD!");
  });
});
