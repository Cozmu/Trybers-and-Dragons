import Race from './Race';

class Halfling extends Race {
  protected static _Halfing = 0;

  constructor(
    name: string,
    dexterity: number, 
    private _maxlifePoints = 60,
  ) {
    super(name, dexterity);
    Halfling._Halfing += 1;
  }

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }

  static createdRacesInstances(): number {
    return this._Halfing;
  }
}

export default Halfling;