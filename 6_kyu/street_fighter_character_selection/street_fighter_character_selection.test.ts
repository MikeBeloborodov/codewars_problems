import {
  fighters,
  streetFighterSelection,
} from "./street_fighter_character_selection";

describe("test cases", () => {
  test("test case 1", () => {
    expect(
      streetFighterSelection(
        fighters,
        [0, 0],
        ["up", "left", "right", "left", "left"],
      ),
    ).toStrictEqual(["Ryu", "Vega", "Ryu", "Vega", "Balrog"]);
  });
  test("test case 2", () => {
    expect(
      streetFighterSelection(
        fighters,
        [0, 0],
        ["left", "left", "left", "left", "left", "left", "left", "left"],
      ),
    ).toStrictEqual([
      "Vega",
      "Balrog",
      "Guile",
      "Blanka",
      "E.Honda",
      "Ryu",
      "Vega",
      "Balrog",
    ]);
  });
  it("should test", () =>
    expect(streetFighterSelection(fighters, [1, 0], ["up"])).toStrictEqual([
      "Ryu",
    ]));
  it("should test", () =>
    expect(streetFighterSelection(fighters, [0, 0], ["down"])).toStrictEqual([
      "Ken",
    ]));
  it("should test", () =>
    expect(streetFighterSelection(fighters, [0, 0], ["right"])).toStrictEqual([
      "E.Honda",
    ]));
});
