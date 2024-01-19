import { alphabetWar } from "./alphabet_war";

describe("test cases", () => {
  it("should return right size", () =>
    expect(alphabetWar("z")).toBe("Right side wins!"));
  it("should return lets fight again", () =>
    expect(alphabetWar("zdqmwpbs")).toBe("Let's fight again!"));
  it("should return left side", () =>
    expect(alphabetWar("wwwwww")).toBe("Left side wins!"));
});
