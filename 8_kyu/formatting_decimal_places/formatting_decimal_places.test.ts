import { twoDecimalPlaces } from "./formatting_decimal_places";

describe("test cases", () => {
  it("should return 15.52", () =>
    expect(twoDecimalPlaces(15.5198589)).toBe(15.52));
});
