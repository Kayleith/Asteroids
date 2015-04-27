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

  Ship.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.pos[0] + this.radius*Math.cos((this.orientation/360)*2*Math.PI) , this.pos[1] + this.radius*Math.sin((this.orientation/360)*2*Math.PI));

    ctx.lineTo(this.pos[0] + this.radius*Math.cos(((145+this.orientation)/360)*2*Math.PI) , this.pos[1] + this.radius*Math.sin(((145+this.orientation)/360)*2*Math.PI));
    ctx.lineTo(this.pos[0] + this.radius*Math.cos(((this.orientation-145)/360)*2*Math.PI) , this.pos[1] + this.radius*Math.sin(((this.orientation- 145)/360)*2*Math.PI));
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = 'rgb(0,128,0)';
    ctx.lineWidth = 5;
    ctx.stroke();
  };

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = VEL;
  };

  Ship.prototype.power = function (impulse) {
    if(Math.sqrt(Math.pow(this.vel[0], 2) + Math.pow(this.vel[1],2)) <= MAX) {
      this.vel[0] += impulse * Math.cos((this.orientation/360)*2*Math.PI);
      this.vel[1] += impulse * Math.sin((this.orientation/360)*2*Math.PI);
    }
  };

  Ship.prototype.decelerate = function (impulse) {
    if(Math.sqrt(Math.pow(this.vel[0], 2) + Math.pow(this.vel[1],2)) <= 0.2){
      this.vel[0] = 0;
      this.vel[1] = 0;
    } else if(Math.sqrt(Math.pow(this.vel[0], 2) + Math.pow(this.vel[1],2)) > MAX) {
      this.vel[0] = MAX * Math.cos((this.orientation/360)*2*Math.PI);
      this.vel[1] = MAX * Math.sin((this.orientation/360)*2*Math.PI);

    } else {
      this.vel[0] += impulse * Math.cos((this.orientation/360)*2*Math.PI);
      this.vel[1] += impulse * Math.sin((this.orientation/360)*2*Math.PI);
    }
  };

  Ship.prototype.rotate = function (shift) {
    if (shift === 1) {
      this.orientation -= 5;
      this.vel[0] = this.vel[0] * Math.cos((this.orientation/360)*2*Math.PI);
      this.vel[1] = this.vel[1] * Math.sin((this.orientation/360)*2*Math.PI);
    } else {
      this.orientation += 5;
      this.vel[0] = this.vel[0] * Math.cos((this.orientation/360)*2*Math.PI);
      this.vel[1] = this.vel[1] * Math.sin((this.orientation/360)*2*Math.PI);
    }
  };

  Ship.prototype.fireBullet = function () {
    var bulletVelocity = [
      (1 + this.vel[0]) * Math.cos((this.orientation/360)*2*Math.PI),
      (1 + this.vel[1]) * Math.sin((this.orientation/360)*2*Math.PI)
    ];
    var bullet = new Asteroids.Bullet(this.pos, bulletVelocity, this.game);
  };
})();
