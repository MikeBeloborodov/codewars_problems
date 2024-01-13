import { whatday } from "./return_the_day";

describe("test cases", () => {
  it("should return Sunday", () => expect(whatday(1)).toBe("Sunday"));
  it("should return Moday", () => expect(whatday(2)).toBe("Monday"));
  it("should return Wrong", () =>
    expect(whatday(10)).toBe("Wrong, please enter a number between 1 and 7"));
});
