import Battle from './Battle';
import Character from '../Character';
import Monster from '../Monster';
import Fighter from '../Fighter/Fighter';
import SimpleFighter from '../Fighter/SimpleFighter';

class PVE extends Battle {
  constructor(
    private _player: Character | Fighter,
    private _monster:Monster[] | SimpleFighter[] | Fighter[],
  ) {
    super(_player);
  }

  override fight(): number {
    for (let index = 0; index < this._monster.length; index += 1) {
      while (this._player.lifePoints > 0 
        && this._monster[index].lifePoints > 0) {
        this._player.attack(this._monster[index]);
        this._monster[index].attack(this._player);
      }
    }
    return super.fight();
  }
}

export default PVE;