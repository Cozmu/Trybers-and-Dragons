import Energy from '../Energy';
import IFighter from './IFighter';
import SimpleFighter from './SimpleFighter';

interface Fighter extends IFighter {
  defense: number,
  energy?: Energy,
  attack(enemy: Fighter | SimpleFighter):void,
  special?(enemy:Fighter):void,
  levelUp():void,
  receiveDamage(attackPoints:number):number
}

export default Fighter;