import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

const Newdexterity = getRandomInt(1, 10);

class Character implements Fighter {
  private _race:Race;
  private _archetype:Archetype;
  private _maxLifePoints:number;
  private _lifePoints:number;
  private _strength:number;
  private _defense:number;
  private _energy:Energy;
  private _dexterity:number;

  constructor(
    private _name:string,
  ) {
    this._race = new Elf(_name, Newdexterity);
    this._dexterity = Newdexterity;
    this._archetype = new Mage(_name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10), 
    };
  }

  receiveDamage(attackPoints: number):number {
    const damange = attackPoints - this._defense;
    if (damange > 0) {
      this._lifePoints -= damange;
    }
    if (damange < 0) {
      this._lifePoints -= 1;
    }
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }
  
  levelUp(): void {
    const newmaxLifePoints = getRandomInt(1, 10) + this._maxLifePoints; 
    if (newmaxLifePoints < this._race.maxLifePoints) {
      this._maxLifePoints = newmaxLifePoints;
      this._lifePoints = this._maxLifePoints;
    } else {
      this._maxLifePoints = this._race.maxLifePoints;
      this._lifePoints = this._maxLifePoints;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  // special(enemy: Fighter): void {
  // IMPLEMENTAR (DANO EM RELAÇÃO A CLASSE)
  // }

  get race():Race {
    return this._race;
  }

  get archetype():Archetype {
    return this._archetype;
  }

  get lifePoints():number {
    return this._lifePoints;
  }

  get strength():number {
    return this._strength;
  }

  get defense():number {
    return this._defense;  
  }

  get dexterity():number {
    return this._dexterity;
  }

  get energy():Energy {
    return { ...this._energy };
  }
}

export default Character;