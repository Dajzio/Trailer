import CoinEarner from './CoinEarner.js';
import { GameLoop } from './GameLoop.js';
const game = new CoinEarner(document.getElementById('game'));
const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
    gameLoop.start();
});
//# sourceMappingURL=app.js.map