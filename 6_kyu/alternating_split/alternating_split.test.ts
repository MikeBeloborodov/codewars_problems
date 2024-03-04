import { encrypt, decrypt } from "./alternating_split";

describe("test cases", () => {
  it("should return 135024", () => expect(encrypt("012345", 1)).toBe("135024"));
  it("should return 304152", () => expect(encrypt("012345", 2)).toBe("304152"));
  it("should return 012345", () => expect(decrypt("135024", 1)).toBe("012345"));
  it("should return null", () => expect(encrypt(null, 1)).toBe(null));
  it("should return null", () => expect(decrypt(null, 1)).toBe(null));
  it("should empty string", () => expect(encrypt("", 1)).toBe(""));
  it("should empty string", () => expect(decrypt("", 1)).toBe(""));
  it("should return This is a test!", () =>
    expect(decrypt("This is a test!", 0)).toBe("This is a test!"));
  it("should return This is a test!", () =>
    expect(decrypt("hsi  etTi sats!", 1)).toBe("This is a test!"));
});
