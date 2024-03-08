import { bump } from "./bumps_in_the_road";

describe("test cases", () => {
  it("should return Woohoo!", () => expect(bump("n")).toBe("Woohoo!"));
  it("should return Car Dead", () =>
    expect(bump("_nnnnnnn_n__n______nn__nn_nnn")).toBe("Car Dead"));
});
