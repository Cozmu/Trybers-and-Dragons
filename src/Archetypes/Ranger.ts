import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  protected static _Ranger = 0;

  constructor(
    name:string,
    private _EnergyType:EnergyType = 'stamina',
  ) {
    super(name);
    Ranger._Ranger += 1;
  }

  get energyType(): EnergyType {
    return this._EnergyType;    
  }

  static createdArchetypeInstances(): number {
    return this._Ranger; 
  } 
}

export default Ranger;