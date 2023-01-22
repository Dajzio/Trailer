import Drawable from './Drawable.js';

export default abstract class ScoreItem extends Drawable {
  protected score: number;

  protected speed: number;

  public constructor() {
    super();
  }

  public getScore(): number {
    return this.score;
  }

  /**
   *
   * @param elapsed loop
   */
  public update(elapsed: number): void {
    this.posY += elapsed * this.speed;
  }
}
