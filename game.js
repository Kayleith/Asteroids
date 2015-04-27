;(function() {
  'use strict';
  var Game = window.Asteroids.Game = function () {
    this.DIM_X = 600;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 20;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship(this.randomPosition(), this);
  };

  Game.prototype.allObjects = function () {
    return this.asteroids.concat([this.ship]);
  }

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

    this.allObjects().forEach(function (object) {
      object.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function(object) {
      object.move();
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
    this.allObjects().forEach(function(object1) {
      this.allObjects().forEach(function(object2) {
        if(object1 != object2){
          if(object1.isCollidedWith(object2)) {
            this.remove(object1);
            this.remove(object2);
          }
        }
      }.bind(this))
    }.bind(this))
  };

  Game.prototype.remove = function (object) {
    var index = this.asteroids.indexOf(object);
    if (index !== -1) {
      this.asteroids.splice(index, 1);
    } else if (index === -1) {
      this.ship = new Asteroids.Ship(this.randomPosition(), this);
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };
})();
