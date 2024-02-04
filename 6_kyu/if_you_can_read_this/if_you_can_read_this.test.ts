import { toNato } from "./if_you_can_read_this";

describe("test cases", () => {
  it("should test", () =>
    expect(toNato("If you can read")).toBe(
      "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta",
    ));
  it("should test", () =>
    expect(toNato("go for it!")).toBe(
      "Golf Oscar Foxtrot Oscar Romeo India Tango !",
    ));
});
