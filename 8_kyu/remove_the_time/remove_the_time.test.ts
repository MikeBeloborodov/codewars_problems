import { shortenToDate } from "./remove_the_time";

describe("test cases", () => {
  it("should return Tuesday January 29", () =>
    expect(shortenToDate("Tuesday January 29, 10pm")).toBe(
      "Tuesday January 29",
    ));
  it("should return Friday May 2", () =>
    expect(shortenToDate("Friday May 2, 9 am")).toBe("Friday May 2"));
  it("should return Monday December 25", () =>
    expect(shortenToDate("Monday December 25, 10pm")).toBe(
      "Monday December 25",
    ));
});
