import { isLockNessMonster } from "./strange_trip_to_the_market";

describe("test cases", () => {
  it("should return true", () =>
    expect(
      isLockNessMonster(
        "Your girlscout cookies are ready to ship. Your total comes to tree fiddy",
      ),
    ).toBe(true));
  it("should return false", () =>
    expect(
      isLockNessMonster(
        "Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.",
      ),
    ).toBe(false));
  it("should return true", () =>
    expect(
      isLockNessMonster(
        "Yo, I heard you were on the lookout for Nessie. Let me know if you need 3.50 assistance.",
      ),
    ).toBe(true));
  it("should return true", () =>
    expect(
      isLockNessMonster(
        "Yo, I heard you were on the lookout for Nessie. Let me know if you need three fifty assistance.",
      ),
    ).toBe(true));
});
