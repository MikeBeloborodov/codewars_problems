import { revrot } from "./reverse_or_rotate";

describe("test cases", () => {
  it("should return 123456987654", () =>
    expect(revrot("123456987654", 6)).toBe("234561876549"));
  it("should return empty", () => expect(revrot("1234", 0)).toBe(""));
  it("should return empty", () => expect(revrot("1234", 5)).toBe(""));
  it("should return 330479108928157 ", () =>
    expect(revrot("733049910872815764", 5)).toBe("330479108928157"));
  it("should return 0365065073456944", () =>
    expect(revrot("563000655734469485", 4)).toBe("0365065073456944"));
});
