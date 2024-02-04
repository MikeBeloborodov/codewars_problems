import { spacify } from "./spacify";

describe("test cases", () => {
  it("should return 'h e l l o   w o r l d'", () =>
    expect(spacify("hello world")).toBe("h e l l o   w o r l d"));
});
