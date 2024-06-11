import { SnakesLadders } from "./snakes_and_ladders";

describe("test cases", () => {
  const game = new SnakesLadders();

  it("should ", () => expect(game.play(1, 1)).toBe("Player 1 is on square 38"));
  it("should ", () => expect(game.play(1, 5)).toBe("Player 1 is on square 44"));
  it("should ", () => expect(game.play(6, 2)).toBe("Player 2 is on square 31"));
  it("should ", () => expect(game.play(1, 1)).toBe("Player 1 is on square 25"));
  it("should ", () => expect(game.play(1, 2)).toBe(`Player 1 is on square 84`));
  it("should ", () => expect(game.play(1, 4)).toBe(`Player 2 is on square 44`));
  it("should ", () => expect(game.play(3, 3)).toBe(`Player 1 is on square 90`));
  it("should ", () => expect(game.play(6, 6)).toBe(`Player 1 is on square 98`));
  it("should ", () => expect(game.play(1, 1)).toBe(`Player 1 Wins!`));
  it("should ", () => expect(game.play(2, 2)).toBe(`Game over!`));
});
