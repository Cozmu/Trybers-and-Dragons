import Archetype from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race from './Races';

type CharacterParams = {
  race:Race,
  archetype:Archetype,
  maxLifePoints:number,
  lifePoints:number,
  strength:number,
  defense:number,
  dexterity:number,
  energy:Energy,
};

class Character implements Fighter {
  private _race:Race;
  private _archetype:Archetype;
  private _maxLifePoints:number;
  private _lifePoints:number;
  private _strength:number;
  private _defense:number;
  private _dexterity:number;
  private _energy:Energy;
  constructor(params: CharacterParams) {
    this._race = params.race;
    this._archetype = params.archetype;
    this._maxLifePoints = params.maxLifePoints;
    this._lifePoints = params.lifePoints;
    this._strength = params.strength;
    this._defense = params.defense;
    this._dexterity = params.dexterity;
    this._energy = params.energy;
  }

  // set dexterity(param: number) {
  //   this. = param;
  // }
}

export default Character;