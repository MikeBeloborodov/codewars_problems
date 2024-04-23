import { switcher } from "./numbers_to_letters";

describe("test cases", () => {
  it("should return codewars", () =>
    expect(switcher(["24", "12", "23", "22", "4", "26", "9", "8"])).toBe(
      "codewars",
    ));
  it("should return btswmdsbd kkw", () =>
    expect(
      switcher([
        "25",
        "7",
        "8",
        "4",
        "14",
        "23",
        "8",
        "25",
        "23",
        "29",
        "16",
        "16",
        "4",
      ]),
    ).toBe("btswmdsbd kkw"));
  it("should return codewars!", () =>
    expect(switcher(["24", "12", "23", "22", "4", "26", "9", "8", "27"])).toBe(
      "codewars!",
    ));
  it("should return codewars?", () =>
    expect(switcher(["24", "12", "23", "22", "4", "26", "9", "8", "28"])).toBe(
      "codewars?",
    ));
});
