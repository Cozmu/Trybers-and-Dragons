import Race from './Race';

class Orc extends Race {
  protected static _Orc = 0;

  constructor(
    name: string,
    dexterity: number, 
    private _maxlifePoints = 74,
  ) {
    super(name, dexterity);
    Orc._Orc += 1;
  }

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }

  static createdRacesInstances(): number {
    return this._Orc;
  }
}

export default Orc;