;(function () {
  Asteroids.Asteroid = Asteroid = function(pos) {
    Asteroids.MovingObject.call(this, pos);
    this.COLOR = "Red";
    this.RADIUS = 10;
    this.vel = Asteroids.Util.randomVec(2);
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);


};)();
