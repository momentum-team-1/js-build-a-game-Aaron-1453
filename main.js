const canvas = document.querySelector("#game-board");
const context = canvas.getContext("2d");
const gameSize = { x: canvas.width, y: canvas.height };

class Game {
  constructor() {
    //coin
    this.coin = new Coin();
    // player
    this.player = new Player();
    // obstacles
    this.animate();
  }

  animate() {
    this.update();
    this.draw();
    window.requestAnimationFrame(() => this.animate());
  }

  draw() {
    // draw the canvas
    context.clearRect(0, 0, gameSize.x, gameSize.y);
    this.player.draw();
    this.coin.draw();
  }

  update() {
    // eventually this method will have to update all the objects
    this.player.update();
  }
}

class Player {
  constructor(game) {
    this.size = { x: 30, y: 30 };
    this.center = {
      x: gameSize.x / 2,
      y: gameSize.y - this.size.y * 2,
    };
    this.keyboarder = Keyboarder;
  }

  draw() {
    console.log("Draw player method called");
    context.fillStyle = "#07BEB8";
    let startingXPosition = this.center.x - this.size.x / 2;
    let startingYPosition = this.center.y - this.size.y / 2;
    let playerWidth = this.size.x;
    let playerHeight = this.size.y;
    context.fillRect(
      startingXPosition,
      startingYPosition,
      playerWidth,
      playerHeight
    );
  }

  update() {
    if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
      this.center.x += 2;
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
      this.center.x -= 2;
    }

    if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
      this.center.y -= 2;
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
      this.center.y += 2;
    }
  }
}

class Coin {
  constructor(game) {
    this.size = { x: 30, y: 30 };
    this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2 };
    this.keyboarder = Keyboarder;
    console.log(this.keyboarder);
  }

  draw() {
    context.fillStyle = "#d4af37";
    let startingXPosition = this.center.x - this.size.x / 4;
    let startingYPosition = this.center.y - this.size.y / 4;
    let coinWidth = this.size.x;
    let coinHeight = this.size.y;
    context.fillRect(
      startingXPosition,
      startingYPosition,
      coinWidth,
      coinHeight
    );
  }
}

new Game();
