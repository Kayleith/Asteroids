;(function () {
  COLOR = "red";
  RADIUS = 10;

  var Asteroid = Asteroids.Asteroid = function(pos) {
    Asteroids.MovingObject.call(this, pos);
    this.color = COLOR;
    this.radius = RADIUS;
    this.vel = Asteroids.Util.randomVec(2);
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

})();
