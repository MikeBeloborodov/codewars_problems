type BoardTrapMap = Record<number, number>;

export class Player {
  position: number;
  private _name: number;

  constructor(name: number) {
    this.position = 0;
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

export class SnakesLadders {
  private _ladders: BoardTrapMap;
  private _snakes: BoardTrapMap;
  private _player1: Player;
  private _player2: Player;
  private _moveOrder: Player[];
  private _isGameOver: boolean;

  constructor() {
    this._player1 = new Player(1);
    this._player2 = new Player(2);
    this._moveOrder = [this._player1, this._player2];
    this._isGameOver = false;

    this._ladders = {
      2: 38,
      7: 14,
      8: 31,
      15: 26,
      21: 42,
      28: 84,
      36: 44,
      51: 67,
      71: 91,
      78: 98,
      87: 94,
    };

    this._snakes = {
      16: 6,
      46: 25,
      49: 11,
      62: 19,
      64: 60,
      74: 53,
      89: 68,
      92: 88,
      95: 75,
      99: 80,
    };
  }

  play(die1: number, die2: number): string {
    if (this._isGameOver) {
      return `Game over!`;
    }

    const player = this._moveOrder.shift()!;

    if (die1 === die2) {
      this._moveOrder.unshift(player);
    } else {
      this._moveOrder.push(player);
    }

    let nextPos = die1 + die2 + player.position;

    if (nextPos > 100) {
      nextPos = 100 - (nextPos - 100);
    }

    if (this._snakes[nextPos]) {
      nextPos = this._snakes[nextPos];
    }

    if (this._ladders[nextPos]) {
      nextPos = this._ladders[nextPos];
    }

    if (nextPos === 100) {
      this._isGameOver = true;
      return `Player ${player.name} Wins!`;
    }

    player.position = nextPos;

    return `Player ${player.name} is on square ${player.position}`;
  }
}
