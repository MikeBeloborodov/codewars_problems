import { cuckooClock } from "./cuckoo_clock";

describe("test cases", () => {
  it("should return 07:30", () =>
    expect(cuckooClock("07:22", 1)).toBe("07:30"));
  it("should return 12:45", () =>
    expect(cuckooClock("12:22", 2)).toBe("12:45"));
  it("should return 01:45", () =>
    expect(cuckooClock("01:30", 2)).toBe("01:45"));
  it("should return 05:30", () =>
    expect(cuckooClock("04:01", 10)).toBe("05:30"));
  it("should return 06:00", () =>
    expect(cuckooClock("03:38", 19)).toBe("06:00"));
});
