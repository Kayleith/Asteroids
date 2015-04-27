;(function() {
  'use strict';
  var RADIUS = 2;
  var COLOR = 'green';

  if (!window.Asteroids) {
    window.Asteroids = {};
  }

  var Bullet = window.Asteroids.Bullet = function (pos, vel, game) {
    Asteroids.MovingObject.call(this, pos, vel);
    this.game = game;
    game.addBullet(this);
    this.radius = RADIUS;
    this.color = COLOR;
    this.isWrappable = false;
  };

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
    this.game.remove(otherObject);
    this.game.remove(this);
    }
  };

})();
