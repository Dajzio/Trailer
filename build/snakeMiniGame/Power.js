import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';
export default class Power extends ScoreItem {
    constructor(maxX, maxY) {
        super();
        this.posX = Math.floor(Math.random() * maxX);
        this.posY = Math.floor(Math.random() * maxY);
        if (this.posX < maxX && this.posY < maxY) {
            this.image = CanvasUtil.loadNewImage('./assets/egg.png');
        }
    }
}
//# sourceMappingURL=Power.js.map