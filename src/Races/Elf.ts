import Race from './Race';

class Elf extends Race {
  protected static _Elf = 0;

  constructor(
    name: string,
    dexterity: number, 
    private _maxlifePoints = 99,
  ) {
    super(name, dexterity);
    Elf._Elf += 1;
  }

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }

  static createdRacesInstances(): number {
    return this._Elf;
  }
}

export default Elf;