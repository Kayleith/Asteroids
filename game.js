;(function() {
  'use strict';
  var Game = window.Asteroids.Game = function () {
    this.DIM_X = 600;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 20;
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.prototype.randomPosition = function () {
    var x = Math.floor(Math.random() * this.DIM_X);
    var y = Math.floor(Math.random() * this.DIM_Y);
    return [x, y];
  };

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      var pos = this.randomPosition();
      this.asteroids.push(new window.Asteroids.Asteroid(pos,this));
    }
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveAsteroids = function () {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.wrap = function (pos) {
    var x = pos[0];
    var y = pos[1];

    if (x < 0) {
      x = this.DIM_X;
    } else if (x > this.DIM_X) {
      x = 0;
    }

    if (y < 0) {
      y = this.DIM_Y;
    } else if (y > this.DIM_Y) {
      y = 0;
    }

    return [x, y];
  };

  Game.prototype.checkCollisions = function () {
    this.asteroids.forEach(function(asteroid1) {
      this.asteroids.forEach(function(asteroid2) {
        if(asteroid1 != asteroid2){
          if(asteroid1.isCollidedWith(asteroid2)) {
            this.remove(asteroid1);
            this.remove(asteroid2);
          }
        }
      }.bind(this))
    }.bind(this))
  };

  Game.prototype.remove = function (asteroid) {
    var index = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(index, 1);
  };

  Game.prototype.step = function () {
    this.moveAsteroids();
    this.checkCollisions();
  };
})();
