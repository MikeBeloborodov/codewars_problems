import { excludingVatPrice } from "./calculate_price_excluding_vat";

describe("test cases", () => {
  it("should return 200.00", () => expect(excludingVatPrice(230)).toBe(200.0));
  it("should return -1", () => expect(excludingVatPrice(null)).toBe(-1));
});
