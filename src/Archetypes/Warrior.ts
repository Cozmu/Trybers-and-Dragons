import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  protected static _Warrior = 0;

  constructor(
    name:string,
    private _EnergyType:EnergyType = 'stamina',
  ) {
    super(name);
    Warrior._Warrior += 1;
  }

  get energyType(): EnergyType {
    return this._EnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._Warrior; 
  } 
}

export default Warrior;