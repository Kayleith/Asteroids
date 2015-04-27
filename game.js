;(function() {
  'use strict';
  window.Asteroids.Game = Game = function () {
    this.DIM_X = 600;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 20;
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.prototype.randomPosition = function () {
    var x = Math.floor(Math.random(0, this.DIM_X));
    var y = Math.floor(Math.random(0, this.DIM_Y));
    return [x, y];
  };

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < NUM_ASTEROIDS; i++) {
      var pos = Game.randomPosition();
      asteroids.push(new window.Asteroids.Asteroid(pos));
    }
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw();
    });
  };

  Game.prototype.moveAsteroids = function () {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
  };
}());
