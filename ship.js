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
    if(Math.sqrt(Math.pow(this.vel[0], 2) + Math.pow(this.vel[1],2)) != 0) {
      this.vel[0] -= impulse * Math.cos(this.orientation);
      this.vel[1] -= impulse * Math.sin(this.orientation);
    }
  };

  Ship.prototype.rotate = function (shift) {
    if (shift === 1) {
      this.orientation += 5;
    } else {
      this.orientation -= 5;
    }
  };
}());
