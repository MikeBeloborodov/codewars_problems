import { abbreviate } from "./word_a10n_abbreviation";

describe("test cases", () => {
  it("should return i18n", () =>
    expect(abbreviate("internationalization")).toBe("i18n"));
  it("should return e6t-r2e", () =>
    expect(abbreviate("elephant-ride")).toBe("e6t-r2e"));
});
