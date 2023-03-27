import IFighter from './IFighter';

interface SimpleFighter extends IFighter {
  attack(enemy:SimpleFighter):void,
  receiveDamage(attackPoints:number):number
}

export default SimpleFighter;