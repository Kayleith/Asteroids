;(function() {
  'use strict';
  var Game = window.Asteroids.Game = function (dimX, dimY) {
    this.DIM_X = dimX;
    this.DIM_Y = dimY;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship(this.randomPosition(), this);
    this.bullets = [];
  };

  Game.prototype.isOutOfBounds = function (pos) {
    if (pos[0] > this.DIM_X || pos[1] > this.DIM_Y) {
      return true;
    } else if (pos[0] < 0 || pos[1] < 0) {
      return true;
    } else {
      return false;
    }
  };

  Game.prototype.allObjects = function () {
    return this.asteroids.concat([this.ship].concat(this.bullets));
  };

  Game.prototype.objectsNotShip = function () {
    return this.asteroids.concat(this.bullets);
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

  Game.prototype.addBullet = function (bullet) {
    this.bullets.push(bullet);
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
    return [(pos[0] + this.DIM_X) % this.DIM_X, (pos[1] + this.DIM_Y) % this.DIM_Y];
  };

  Game.prototype.checkCollisions = function () {
    this.objectsNotShip().forEach(function(object1) {
      this.allObjects().forEach(function(object2) {
        if(object1 != object2){
          if(object1.isCollidedWith(object2)) {
            object1.collideWith(object2);
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
      var index = this.bullets.indexOf(object);
      this.bullets.splice(index, 1);
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };
})();
