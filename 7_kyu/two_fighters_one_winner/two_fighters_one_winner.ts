interface IFighter {
  name: string;
  health: number;
  damagePerAttack: number;
}

export class Fighter implements IFighter {
  name: string;
  health: number;
  damagePerAttack: number;

  constructor(name: string, health: number, damagePerAttack: number) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
  }
}

export const declareWinner = (
  fighter1: Fighter,
  fighter2: Fighter,
  firstAttackerName: string,
) => {
  const [firstAttacker, secondAttacker] =
    firstAttackerName === fighter1.name
      ? [fighter1, fighter2]
      : [fighter2, fighter1];

  while (true) {
    secondAttacker.health =
      secondAttacker.health - firstAttacker.damagePerAttack;
    if (secondAttacker.health <= 0) break;
    firstAttacker.health =
      firstAttacker.health - secondAttacker.damagePerAttack;
    if (firstAttacker.health <= 0) break;
  }

  return fighter1.health > 0 ? fighter1.name : fighter2.name;
};
