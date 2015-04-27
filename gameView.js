;(function() {
  'use strict';

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  GameView.prototype.start = function () {
    var render = (function() {
      this.game.step();
      this.game.draw(this.ctx);
    }).bind(this);
    window.setInterval(render, 20);
  };
})();
