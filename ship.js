(function() {
  'use strict';

  var RADIUS = 5;
  var COLOR = "blue";
  var VEL = [0, 0];

  var Ship = window.Asteroids.Ship = function (pos, game) {
    Asteroids.MovingObject.call(this, pos);
    this.radius = RADIUS;
    this.color = COLOR;
    this.vel = VEL;
    this.game = game;
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

}());
