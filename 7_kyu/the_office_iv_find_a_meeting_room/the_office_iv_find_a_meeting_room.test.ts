import { meeting } from "./the_office_iv_find_a_meeting_room";

describe("test cases", () => {
  it("should return 1", () => expect(meeting(["X", "O", "X"])).toBe(1));
  it("should return not available", () =>
    expect(meeting(["X", "X", "X", "X", "X"])).toBe("None available!"));
});
