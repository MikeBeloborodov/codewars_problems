import { decode, encode } from "./the_vowel_code";

describe("test cases", () => {
  it("should return h2ll4", () => expect(encode("hello")).toBe("h2ll4"));
  it("should return hello", () => expect(decode("h2ll4")).toBe("hello"));
});
