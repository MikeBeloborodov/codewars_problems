import { contamination } from "./contamination_1_string";

describe("test cases", () => {
  it("should test", () => expect(contamination("abc", "z")).toBe("zzz"));
  it("should test", () => expect(contamination("", "a")).toBe(""));
  it("should test", () => expect(contamination("abc", "")).toBe(""));
});
