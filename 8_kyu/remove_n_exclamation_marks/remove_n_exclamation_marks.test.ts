import { remove } from "./remove_n_exclamation_marks";

describe("test cases", () => {
  it("should return Hi", () => expect(remove("Hi!", 1)).toBe("Hi"));
  it("should reutrn Hi", () => expect(remove("Hi", 100)).toBe("Hi"));
  it("should return Hi!", () => expect(remove("!Hi!", 1)).toBe("Hi!"));
});
