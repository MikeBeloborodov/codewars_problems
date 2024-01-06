import { nameShuffler } from "./name_shuffler";

describe("shuffler tests", () => {
  it('should return "McClane john"', () =>
    expect(nameShuffler("john McClane")).toBe("McClane john"));
  it("should return jeggins Mary", () =>
    expect(nameShuffler("Mary jeggins")).toBe("jeggins Mary"));
  it("should return jerry tom", () =>
    expect(nameShuffler("tom jerry")).toBe("jerry tom"));
  it(`it should return O'Brian William`, () =>
    expect(nameShuffler(`William O'Brian`)).toBe(`O'Brian William`));
});
