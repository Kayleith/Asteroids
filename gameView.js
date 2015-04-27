;(function() {
  'use strict';

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  GameView.prototype.start = function () {
    this.bindKeyHandlers();
    var render = (function() {
      this.game.step();
      this.game.draw(this.ctx);
    }).bind(this);
    window.setInterval(render, 20);
  };

  GameView.prototype.bindKeyHandlers = function () {
    key('i', function() {
      this.game.ship.power(1);
    }.bind(this));

    key('k', function() {
      this.game.ship.decelerate(1);
    }.bind(this));

    key('l', function () {
      this.game.ship.rotate(-1);
    }.bind(this));

    key('j', function () {
      this.game.ship.rotate(1);
    }.bind(this));

    key('a', function () {
      this.game.ship.fireBullet();
    }.bind(this));
  };
})();
