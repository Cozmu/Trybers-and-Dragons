import Race from './Race';

class Dwarf extends Race {
  protected static _Dawrf = 0;

  constructor(
    name: string,
    dexterity: number, 
    private _maxlifePoints = 80,
  ) {
    super(name, dexterity);
    Dwarf._Dawrf += 1;
  }

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }

  static createdRacesInstances(): number {
    return this._Dawrf;
  }
}

export default Dwarf;