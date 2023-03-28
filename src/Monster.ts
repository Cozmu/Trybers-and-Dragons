import Fighter, { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(
    protected _lifePoints:number = 85,
    private _strength:number = 63,
  ) {}

  get lifePoints():number {
    return this._lifePoints;
  }

  get strength():number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damange = this._lifePoints - attackPoints;
    if (damange <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = damange;
    }
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this.strength);
  }
}

export default Monster;