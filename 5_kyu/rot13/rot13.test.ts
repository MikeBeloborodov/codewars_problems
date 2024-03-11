import { rot13 } from "./rot13";

describe("test cases", () => {
  it("should return grfg", () => expect(rot13("test")).toBe("grfg"));
  it("should return Grfg", () => expect(rot13("Test")).toBe("Grfg"));
  it("should return G rfg", () => expect(rot13("T est")).toBe("G rfg"));
  it("should test", () => expect(rot13("Ruby is cool!")).toBe("Ehol vf pbby!"));
  it("should return Pbqrjnef", () =>
    expect(rot13("Codewars")).toBe("Pbqrjnef"));
});
