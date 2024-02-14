import { mazeRunner } from "./maze_runner";

const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

describe("test cases", () => {
  it("should return Finish", () =>
    expect(
      mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]),
    ).toBe("Finish"));
  it("should return Dead", () =>
    expect(
      mazeRunner(maze, [
        "N",
        "N",
        "N",
        "N",
        "N",
        "E",
        "E",
        "S",
        "S",
        "S",
        "S",
        "S",
        "S",
      ]),
    ).toBe("Dead"));
  it("should return Lost", () =>
    expect(mazeRunner(maze, ["N", "E", "E", "E", "E"])).toBe("Lost"));
  it("should return Dead", () =>
    expect(mazeRunner(maze, ["N", "N", "N", "W", "W"])).toBe("Dead"));
});
