import { presses } from "./multitap_keypad_text_entry_on_an_old_mobile_phone";

describe("test cases", () => {
  it("should return 9", () => expect(presses("LOL")).toBe(9));
  it("should return 13", () => expect(presses("HOW R U")).toBe(13));
});
