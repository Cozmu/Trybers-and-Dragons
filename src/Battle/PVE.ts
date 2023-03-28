import Battle from './Battle';
import Character from '../Character';
import Monsters from '../Monster';
import Fighter from '../Fighter/Fighter';
import SimpleFighter from '../Fighter/SimpleFighter';

class PVE extends Battle {
  constructor(
    private _player: Character | Fighter,
    private _monster:Monsters[] | SimpleFighter[] | Fighter[],
  ) {
    super(_player);
  }

  override fight(): number {
    return super.fight();
  }
}

export default PVE;