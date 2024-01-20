import { isAnagram } from "./anagram_detection";

describe("test cases", () => {
  it("should return true", () =>
    expect(isAnagram("foefet", "toffee")).toBe(true));
  it("should return true", () =>
    expect(isAnagram("Buckethead", "DeathCubeK")).toBe(true));
  it("should return false", () =>
    expect(isAnagram("dumble", "bumble")).toBe(false));
  it("should return false", () => expect(isAnagram("asdf", "asd")).toBe(false));
});
