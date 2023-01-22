/* eslint-disable max-len */
import KeyListener from './KeyListener.js';
import CanvasUtil from './CanvasUtil.js';
import Player from './Player.js';
import ScoreItem from './ScoreItem.js';
import Fruit from './Fruit.js';
import Body from './Body.js';
import Power from './Power.js';
import Scene from '../Scene.js';

export default class Snake extends Scene {
  private canvas: HTMLCanvasElement;

  private player: Player;

  private keyListener: KeyListener;

  private scoreItems: ScoreItem[] = [];

  private score: number = 0;

  private body: Body[] = [];

  private timeToNextItem: number = 0;

  private fruit: Fruit[] = [];

  private power: Power;

  private logo: HTMLImageElement;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.player = new Player(maxX, maxY);
    // this.canvas.height = maxX;
    // this.canvas.width = maxY;
    this.keyListener = new KeyListener();
    this.scoreItems = [];
    this.score = 0;
    this.scoreItems.push(new Fruit(maxX, maxY));
    // this.scoreItems.push(new Power(maxX, maxY));
    this.logo = CanvasUtil.loadNewImage('./assets/grass.jpg');
    this.body = [];
  }

  /**
   *
   * @param keyListener
   */
  public processInput(): void {
    if (this.keyListener.isKeyDown(KeyListener.KEY_UP)) {
      this.player.move(1);
    }

    if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
      this.player.move(2);
    }

    if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
      this.player.move(3);
    }

    if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
      this.player.move(4);
    }
  }

  /**
   *
   * @param elapsed
   */
  public update(elapsed: number): Scene {
    this.timeToNextItem -= elapsed;

    // this.player.update(elapsed);

    if (this.player.getPosX() < 0 || this.player.getPosX() > this.maxX
      || this.player.getPosY() < 0 || this.player.getPosY() > this.maxY) {
      return null;
    }
    if (this.player.isMoving(1)) {
      console.log(this.player.isMoving(1));
    }
    this.scoreItems.forEach((scoreItem: ScoreItem, index: number) => {
      if (this.player.collidesWithItem(scoreItem)) {
        if (scoreItem instanceof Fruit) {
          this.score += scoreItem.getScore();
          this.scoreItems.splice(index, 1);
          this.player.body.push(new Body(this.player.getPosX() - 56 * this.player.body.length, this.player.getPosY()));

          // const chancece = Math.random() * 100;
          // if (this.timeToNextItem < 0) {
          //   this.scoreItems.push(new Fruit(this.canvas.width, this.canvas.height));
          //   this.timeToNextItem = 500 + Math.random() * 200;
          // }
        } else if (scoreItem instanceof Power) {
          this.player.speeedup();
          this.scoreItems.splice(index, 1);
        }
        const chance = Math.random();
        if (chance < 0.8) {
          this.scoreItems.push(new Fruit(this.maxX + 100, this.maxY + 100));
        } else {
          this.scoreItems.push(new Power(this.maxX + 100, this.maxY + 100));
        }
      }
      return true;
    });
    return null;
  }

  /**
   *
   * @param canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    console.log(canvas.width, canvas.height, this.logo.width, this.logo.height);
    CanvasUtil.drawImage(canvas, this.logo, (canvas.width - this.logo.width) / 2, (canvas.height - this.logo.height) / 2);
    this.player.render(canvas);
    console.log(this.scoreItems);
    this.scoreItems.forEach((scoreItem: ScoreItem) => scoreItem.render(canvas));
    // this.player.body.forEach((body: Body) => body.render(canvas));
    CanvasUtil.writeTextToCanvas(canvas, `Score: ${this.score}`, 10, 30, 'left', 'Comic Sans MS', 40, 'white');
    if (this.player.getPosX() < 0 || this.player.getPosX() > canvas.width
      || this.player.getPosY() < 0 || this.player.getPosY() > canvas.height) {
      CanvasUtil.writeTextToCanvas(canvas, 'Game Over', canvas.width / 2, canvas.height / 2, 'center', 'Comic Sans MS', 60, 'white');
    }
    this.scoreItems.forEach((scoreItem: ScoreItem) => {
      if (this.player.collidesWithItem(scoreItem)) {
        if (scoreItem instanceof Body) {
          CanvasUtil.writeTextToCanvas(canvas, 'Game Over', canvas.width / 2, canvas.height / 2, 'center', 'Comic Sans MS', 60, 'white');
        }
      }
    });
  }
}
