import { combineNames } from "./combine_strings";

describe("test cases", () => {
  it("should return Mike Beloborodov", () =>
    expect(combineNames("Mike", "Beloborodov")).toBe("Mike Beloborodov"));
});
