import { validateUsr } from "./username_validation";

describe("test cases", () => {
  it("should return true", () => expect(validateUsr("asddsa")).toBe(true));
  it("should return false", () => expect(validateUsr("a")).toBe(false));
  it("should return false", () => expect(validateUsr("Hass")).toBe(false));
  it("should return false", () =>
    expect(validateUsr("Hasd_12assssssasasasasasaasasasasas")).toBe(false));
  it("should return false", () => expect(validateUsr("")).toBe(false));
  it("should return true", () => expect(validateUsr("____")).toBe(true));
  it("should return false", () => expect(validateUsr("012")).toBe(false));
  it("should return true", () => expect(validateUsr("0123")).toBe(true));
  it("should return false", () =>
    expect(validateUsr("1234567890abcdefg")).toBe(false));
});
