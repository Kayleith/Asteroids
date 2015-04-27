;(function() {
  var MovingObject = window.Asteroids.MovingObject = function(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
    this.isWrappable = true;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.isWrappable) {
      this.pos = this.game.wrap(this.pos);
    } else if (this.game.isOutOfBounds(this.pos)) {
      this.game.remove(this);
    }
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    dis_x = this.pos[0] - otherObject.pos[0];
    dis_y = this.pos[1] - otherObject.pos[1];
    distance = Math.sqrt(Math.pow(dis_x, 2) + Math.pow(dis_y,2));
    return distance <= (this.radius + otherObject.radius);
  };
})();
