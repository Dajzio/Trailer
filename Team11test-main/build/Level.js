import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import CanvasUtil from './CanvasUtil.js';
import NPC from './NPC.js';
import PlayerMap from './PlayerMap.js';
import QuestionScene from './QuestionScene.js';
import Carpet from './Carpet.js';
import VictoryScene from './VictoryScene.js';
import CoinEarner from './CoinEarner.js';
import Snake from './snakeMiniGame/Snake.js';
export default class Level extends Scene {
    player;
    startingQuestion;
    greenCarpet;
    blueCarpet;
    redCarpet;
    startingTicTacToe;
    startingVictory;
    startingSnake;
    carpetGameArray = [new Carpet(this.maxX, this.maxY, 1), new Carpet(this.maxX, this.maxY, 2)];
    carpetWinArray = [new Carpet(this.maxX, this.maxY, 3)];
    npcArray = [new NPC(this.maxX, this.maxY, 1), new NPC(this.maxX, this.maxY, 2), new NPC(this.maxX, this.maxY, 3), new NPC(this.maxX, this.maxY, 4)];
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.player = new PlayerMap(maxX, maxY);
        this.startingQuestion = false;
        this.startingTicTacToe = false;
        this.startingVictory = false;
        this.startingSnake = false;
    }
    processInput(mouseListener, keyListener) {
        if (keyListener.isKeyDown(KeyListener.KEY_UP))
            this.player.move(1);
        if (keyListener.isKeyDown(KeyListener.KEY_RIGHT))
            this.player.move(2);
        if (keyListener.isKeyDown(KeyListener.KEY_DOWN))
            this.player.move(3);
        if (keyListener.isKeyDown(KeyListener.KEY_LEFT))
            this.player.move(4);
        if (keyListener.isKeyDown(KeyListener.KEY_F)) {
            this.npcArray.forEach((npc) => {
                if (this.player.isCollidingNPC(npc)) {
                    this.startingQuestion = true;
                }
                return null;
            });
        }
        if (CoinEarner.score >= 0) {
            this.carpetWinArray.forEach((carpet) => {
                if (this.player.isCollidingCarpet(carpet)) {
                    this.startingSnake = true;
                }
                return null;
            });
        }
        if (this.player.getPosY() > 190.5) {
            if (this.player.getPosX() < 709) {
                if (this.player.getPosY() < 200) {
                    if (keyListener.isKeyDown(KeyListener.KEY_DOWN))
                        this.player.move(1);
                }
            }
        }
        if (this.player.getPosX() < 709) {
            if (this.player.getPosX() > 700) {
                if (this.player.getPosY() > 190.5) {
                    if (this.player.getPosY() < 405.5) {
                        if (keyListener.isKeyDown(KeyListener.KEY_LEFT))
                            this.player.move(2);
                    }
                }
            }
        }
        if (this.player.getPosY() < 405.5) {
            if (this.player.getPosY() > 390.5) {
                if (this.player.getPosX() < 709) {
                    if (keyListener.isKeyDown(KeyListener.KEY_UP))
                        this.player.move(3);
                }
            }
        }
        if (this.player.getPosY() > 190.5) {
            if (this.player.getPosX() > 1038) {
                if (this.player.getPosY() < 200) {
                    if (keyListener.isKeyDown(KeyListener.KEY_DOWN))
                        this.player.move(1);
                }
            }
        }
        if (this.player.getPosX() > 1050) {
            if (this.player.getPosX() < 1060) {
                if (this.player.getPosY() > 190.5) {
                    if (this.player.getPosY() < 405.5) {
                        if (keyListener.isKeyDown(KeyListener.KEY_RIGHT))
                            this.player.move(4);
                    }
                }
            }
        }
        if (this.player.getPosY() < 405.5) {
            if (this.player.getPosY() > 390.5) {
                if (this.player.getPosX() > 1038) {
                    if (keyListener.isKeyDown(KeyListener.KEY_UP))
                        this.player.move(3);
                }
            }
        }
        if (this.player.getPosY() > 482) {
            if (this.player.getPosX() < 709) {
                if (this.player.getPosY() < 490) {
                    if (keyListener.isKeyDown(KeyListener.KEY_DOWN))
                        this.player.move(1);
                }
            }
        }
        if (this.player.getPosX() < 709) {
            if (this.player.getPosX() > 700) {
                if (this.player.getPosY() > 482) {
                    if (this.player.getPosY() < 700.5) {
                        if (keyListener.isKeyDown(KeyListener.KEY_LEFT))
                            this.player.move(2);
                    }
                }
            }
        }
        if (this.player.getPosY() < 700.5) {
            if (this.player.getPosY() > 600.5) {
                if (this.player.getPosX() < 709) {
                    if (keyListener.isKeyDown(KeyListener.KEY_UP))
                        this.player.move(3);
                }
            }
        }
        if (this.player.getPosY() > 482) {
            if (this.player.getPosX() > 1038) {
                if (this.player.getPosY() < 499) {
                    if (keyListener.isKeyDown(KeyListener.KEY_DOWN))
                        this.player.move(1);
                }
            }
        }
        if (this.player.getPosX() > 1050) {
            if (this.player.getPosX() < 1060) {
                if (this.player.getPosY() > 482) {
                    if (this.player.getPosY() < 700.5) {
                        if (keyListener.isKeyDown(KeyListener.KEY_RIGHT))
                            this.player.move(4);
                    }
                }
            }
        }
        if (this.player.getPosY() < 700.5) {
            if (this.player.getPosY() > 600.5) {
                if (this.player.getPosX() > 1038) {
                    if (keyListener.isKeyDown(KeyListener.KEY_UP))
                        this.player.move(3);
                }
            }
        }
    }
    update(elapsed) {
        if (this.player.getPosX() < 19) {
            this.player.setPositionX(20);
        }
        if (this.player.getPosX() > 1820) {
            this.player.setPositionX(1819);
        }
        if (this.player.getPosY() < 30) {
            this.player.setPositionY(31);
        }
        if (this.player.getPosY() > 810) {
            this.player.setPositionY(809);
        }
        if (this.startingQuestion)
            return new QuestionScene(this.maxX, this.maxY);
        if (this.startingVictory)
            return new VictoryScene(this.maxX, this.maxY);
        if (this.startingSnake)
            return new Snake(this.maxX, this.maxY);
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        this.npcArray.forEach((npc) => {
            npc.render(canvas);
        });
        this.carpetWinArray.forEach((carpet) => {
            carpet.render(canvas);
        });
        this.carpetGameArray.forEach((carpet) => {
            carpet.render(canvas);
        });
        this.player.render(canvas);
        CanvasUtil.writeTextToCanvas(canvas, `Score: ${CoinEarner.score}`, 100, 40, 'center', 'serif', 40, 'red');
    }
}
//# sourceMappingURL=Level.js.map