import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private _playerOne:Character | Fighter,
    private _playerTwo:Character | Fighter,
  ) {
    super(_playerOne);
  }

  override fight(): number {
    while (this._playerOne.lifePoints > 0 && this._playerTwo.lifePoints > 0) {
      this._playerOne.attack(this._playerTwo);
      this._playerTwo.attack(this._playerOne);
    }
    return super.fight();
  }
}

export default PVP;