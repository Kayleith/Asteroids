;(function () {
  window.Asteroids.Util.inherits = var Util.inherits = function (childClass, parentClass) {
    function Surrogate() = {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };
};)();
