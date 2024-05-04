import { toBinary } from "./convert_to_binary";

describe("test cases", () => {
  it("should return 1", () => expect(toBinary(1)).toBe(1));
  it("should return 101", () => expect(toBinary(5)).toBe(101));
});
