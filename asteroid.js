;(function () {
  COLOR = "red";
  RADIUS = 10;

  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    Asteroids.MovingObject.call(this, pos);
    this.game = game;
    this.color = COLOR;
    this.radius = RADIUS;
    this.vel = Asteroids.Util.randomVec(2);
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    } else {
      this.bounce();
    }
  };
  Asteroid.prototype.bounce = function () {
    this.vel[0] = -this.vel[0];
    this.vel[1] = -this.vel[1];
  };
})();
