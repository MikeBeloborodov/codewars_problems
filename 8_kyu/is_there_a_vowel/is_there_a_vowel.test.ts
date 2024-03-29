import { isVow } from "./is_there_a_vowel";

describe("test cases", () => {
  it("should test", () =>
    expect(
      isVow([
        118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
        120, 106,
      ]),
    ).toStrictEqual([
      118,
      "u",
      120,
      121,
      "u",
      98,
      122,
      "a",
      120,
      106,
      104,
      116,
      113,
      114,
      113,
      120,
      106,
    ]));
  it("should test", () =>
    expect(
      isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]),
    ).toStrictEqual(["e", 121, 110, 113, 113, 103, 121, 121, "e", 107, 103]));
});
