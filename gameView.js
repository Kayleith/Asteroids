;(function() {
  'use strict';

  var GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  GameView.prototype.start = function () {
    setInterval(20, function() {
      this.game.moveAsteroids();
      this.game.draw();
    }.bind(this.game););
  };
}());
