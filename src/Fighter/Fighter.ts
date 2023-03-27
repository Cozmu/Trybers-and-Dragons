import Energy from '../Energy';
import IFighter from './IFighter';

interface Fighter extends IFighter {
  defense: number,
  energy?: Energy,
  attack(enemy: Fighter):void,
  special?(enemy:Fighter):void,
  levelUp():void,
  receiveDamage(attackPoints:number):number
}

export default Fighter;