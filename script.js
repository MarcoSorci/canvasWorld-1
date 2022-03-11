const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


let sprites = World.build(Levels.getLevel(5));


const controller = new Controller();




setInterval(() => {

  context.clearRect(0, 0, canvas.width, canvas.height);

  for (const sprite of sprites) {

    if (sprite.hasWon) {
      sprites = World.build(Levels.getLevel(5));
    }
    if (sprite.hasDied) {
      sprites = World.build(Levels.getLevel(6));
    }
    CollisionDetector.checkCollisions(sprite, sprites)
    sprite.draw(context);

    sprite.update(canvas, controller);

  }


}, 30);


