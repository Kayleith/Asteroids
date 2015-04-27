;(function () {
  if(!window.Asteroids) {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = {};
  var inherits = Util.inherits = function (childClass, parentClass) {
    var Surrogate = function() {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };

  var randomVec = Util.randomVec = function(length) {
    var x = Math.random() * length;
    var y = Math.sqrt(Math.pow(length, 2) - Math.pow(x, 2));
    var dir_x = Math.random(0,1) < .5 ? -1 : 1;
    var dir_y = Math.random(0,1) < .5 ? -1 : 1;
    return [x*dir_x, y*dir_y];
  };
})();
