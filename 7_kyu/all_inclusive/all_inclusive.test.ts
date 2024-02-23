import { containAllRots } from "./all_inclusive";

describe("test cases", () => {
  it("should return true", () => expect(containAllRots("", [])).toBe(true));
  it("should return true", () =>
    expect(containAllRots("", ["bsjq", "qbsj"])).toBe(true));
  it("should return true", () =>
    expect(
      containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]),
    ).toBe(true));
  it("should return false", () =>
    expect(
      containAllRots("XjYABhR", [
        "TzYxlgfnhf",
        "yqVAuoLjMLy",
        "BhRXjYA",
        "YABhRXj",
        "hRXjYAB",
        "jYABhRX",
        "XjYABhR",
        "ABhRXjY",
      ]),
    ).toBe(false));
});
