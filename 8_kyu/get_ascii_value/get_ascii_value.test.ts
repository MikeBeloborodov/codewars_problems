import { getASCII } from "./get_ascii_value";

describe("test cases", () => {
  it("should return 65", () => expect(getASCII("A")).toBe(65));
  it("should return 32", () => expect(getASCII(" ")).toBe(32));
  it("should return 33", () => expect(getASCII("!")).toBe(33));
});
