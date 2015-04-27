(function() {
  'use strict';

  var RADIUS = 5;
  var COLOR = "blue";
  var VEL = [0, 0];
  var MAX = 10;

  var Ship = window.Asteroids.Ship = function (pos, game) {
    Asteroids.MovingObject.call(this, pos);
    this.radius = RADIUS;
    this.color = COLOR;
    this.vel = VEL;
    this.game = game;
    this.orientation = 90;
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = VEL;
  };

  Ship.prototype.power = function (impulse) {
    if(Math.sqrt(Math.pow(this.vel[0], 2) + Math.pow(this.vel[1],2)) <= MAX) {
      this.vel[0] += impulse * Math.cos(this.orientation);
      this.vel[1] += impulse * Math.sin(this.orientation);
    }
  };

  Ship.prototype.decelerate = function (impulse) {
    if(Math.sqrt(Math.pow(this.vel[0], 2) + Math.pow(this.vel[1],2)) <= 0.000001) {
      this.vel[0] = 0;
      this.vel[1] = 0;
      return;
    }
    this.vel[0] -= impulse * Math.cos(this.orientation);
    this.vel[1] -= impulse * Math.sin(this.orientation);
  };

  Ship.prototype.rotate = function (shift) {
    if (shift === 1) {
      this.orientation += 5;
    } else {
      this.orientation -= 5;
    }
  };

  Ship.prototype.fireBullet = function () {
    var bulletVelocity = [
      (1 + this.vel[0]) * Math.cos(this.orientation),
      (1 + this.vel[1]) * Math.sin(this.orientation)
    ];
    var bullet = new Asteroids.Bullet(this.pos, bulletVelocity, this.game);
  };
})();
