import { countRedBeads } from "./simple_beads_count";

describe("test cases", () => {
  it("should return 0", () => expect(countRedBeads(0)).toBe(0));
  it("should return 0", () => expect(countRedBeads(1)).toBe(0));
  it("should return 8", () => expect(countRedBeads(5)).toBe(8));
});
