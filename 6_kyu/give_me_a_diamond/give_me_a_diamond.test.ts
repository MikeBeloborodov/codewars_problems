import { diamond } from "./give_me_a_diamond";

describe("test cases", () => {
  it("should test", () => expect(diamond(1)).toBe("*\n"));
  it("should test", () => expect(diamond(3)).toBe(" *\n***\n *\n"));
  it("should test", () =>
    expect(diamond(5)).toBe("  *\n ***\n*****\n ***\n  *\n"));
  it("should return null", () => expect(diamond(0)).toBe(null));
  it("should return null", () => expect(diamond(-3)).toBe(null));
  it("should return null", () => expect(diamond(2)).toBe(null));
});
