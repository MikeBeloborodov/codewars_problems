import { spEng } from "./do_you_speak_english";

describe("test cases", () => {
  it("should return true", () => expect(spEng("english")).toBe(true));
  it("should return false", () => expect(spEng("egnlish")).toBe(false));
});
