import { comp } from "./are_they_same";

describe("tests for are they same", () => {
  it("should return true", () =>
    expect(
      comp(
        [121, 144, 19, 161, 19, 144, 19, 11],
        [
          11 * 11,
          121 * 121,
          144 * 144,
          19 * 19,
          161 * 161,
          19 * 19,
          144 * 144,
          19 * 19,
        ],
      ),
    ).toBe(true));
});
