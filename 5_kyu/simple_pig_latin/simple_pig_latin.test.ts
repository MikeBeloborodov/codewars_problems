import { pigIt } from "./simple_pig_latin";

describe("test cases", () => {
  it("should return converted string", () =>
    expect(pigIt("Pig latin is cool !")).toBe("igPay atinlay siay oolcay !"));
});
