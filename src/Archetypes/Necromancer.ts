import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  protected static _Necromancer = 0;

  constructor(
    name:string,
    private _EnergyType:EnergyType = 'mana',
  ) {
    super(name);
    Necromancer._Necromancer += 1;
  }

  get energyType(): EnergyType {
    return this._EnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._Necromancer; 
  } 
}

export default Necromancer;