import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
import Player from './Player.js';

export default class Body extends Drawable {
  private player: Player;

  public constructor(maxX: number, maxY: number) {
    super();
    this.posX = maxX;
    this.posY = maxY;
    this.image = CanvasUtil.loadNewImage('./assets/vertical.png');
  }
}
