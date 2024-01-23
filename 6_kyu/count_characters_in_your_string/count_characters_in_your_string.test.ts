import { count } from "./count_characters_in_your_string";

describe("test cases", () => {
  it("should test", () => expect(count("a")).toStrictEqual({ a: 1 }));
  it("should test", () =>
    expect(count("abc")).toStrictEqual({ a: 1, b: 1, c: 1 }));
  it("should test", () => expect(count("")).toStrictEqual({}));
  it("should test", () => expect(count("abaab")).toStrictEqual({ a: 3, b: 2 }));
});
