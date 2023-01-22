/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param-description */
import KeyListener from './KeyListener.js';
import CanvasUtil from './CanvasUtil.js';
import Player from './Player.js';
import ScoreItem from './ScoreItem.js';
import Scene from './Scene.js';
import PlayerSnake from './PlayerSnake.js';

export default class SnakeScene extends Scene {
  private canvas: HTMLCanvasElement;

  private player: Player;

  private keyListener: KeyListener;

  private scoreItems: ScoreItem[] = [];

  private score: number = 0;

  private timeToNextItem: number = 0;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.player = new PlayerSnake(maxX, maxY);
    this.keyListener = new KeyListener();
  }

  /**
   *
   * @param keyListener
   */
  public processInput(): void {
    if (this.keyListener.isKeyDown(KeyListener.KEY_UP)) {
      this.player.move(1);
      this.player.getImage();
    }
    if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
      this.player.move(2);
      this.player.getImage();
    }
    if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
      this.player.move(3);
      this.player.getImage();
    }
    if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
      this.player.move(4);
      this.player.getImage();
    }
  }

  /**
   *
   * @param elapsed
   */
  public update(elapsed: number): Scene {
    this.timeToNextItem -= elapsed;

    if (this.player.getPosX() < 0 || this.player.getPosX() > this.canvas.width
      || this.player.getPosY() < 0 || this.player.getPosY() > this.canvas.height) {
      return null;
    }
    return null;
  }

  /**
   *
   * @param canvas
   */
  public render(): void {
    CanvasUtil.clearCanvas(this.canvas);
    this.player.render(this.canvas);
    const ctx = this.canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(this.player.getPosX(), this.player.getPosY());
    ctx.lineTo(this.player.getPosX() + 10, this.player.getPosY() + 10);
    ctx.stroke();
  }
}
