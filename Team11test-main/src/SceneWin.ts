/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsdoc/require-jsdoc */
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import CanvasUtil from './CanvasUtil.js';
import SceneStart from './SceneStart.js';
import MouseListener from './MouseListener.js';

export default class SceneWin extends Scene {
  private continue: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.continue = false;
  }

  public processInput(mouseListener: MouseListener, keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_SPACE)) this.continue = true;
  }

  public update(elapsed: number): Scene {
    if (this.continue) return new SceneStart(this.maxX, this.maxY);
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.writeTextToCanvas(canvas, 'You won!', canvas.width / 2, canvas.height / 2, 'center', 'serif', 48, 'green');
    CanvasUtil.writeTextToCanvas(canvas, 'Press [space] to continue!', canvas.width / 2, (canvas.height / 2) + 50, 'center', 'serif', 36, 'green');
  }
}
