import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  protected static _Mage = 0;

  constructor(
    name:string,
    private _EnergyType:EnergyType = 'mana',
  ) {
    super(name);
    Mage._Mage += 1;
  }

  get energyType():EnergyType {
    return this._EnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._Mage; 
  } 
}

// const newmage = new Mage('supermago', 21, 123, 'mana');
// console.log(newmage.name);

export default Mage;