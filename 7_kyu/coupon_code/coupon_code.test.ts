import { checkCoupon } from "./coupon_code";

describe("coupon code tests", () => {
  it("should return false", () => {
    expect(
      checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014"),
    ).toBe(false);
  });
  it("should return true", () => {
    expect(
      checkCoupon("123", "123", "September 5, 2014", "October 1, 2014"),
    ).toBe(true);
  });
  it("should return false", () => {
    expect(
      checkCoupon("123", "123", "October 5, 2014", "October 1, 2014"),
    ).toBe(false);
  });
});
