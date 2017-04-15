var message = "in global";
console.log("global: message = " + message);

var a = function () {
   var message = "inside a";
   console.log("a: message = " + message);
   b();




  function b () {
     console.log("b: message = " + message);
}


}

 a();

(function (window) {
  var yaakovGreeter = {};
  yaakovGreeter.name = "Yaakov";
  var greeting = "Hello ";
  yaakovGreeter.sayHello = function () {
    console.log(greeting + yaakovGreeter.name);
  }

  window.yaakovGreeter = yaakovGreeter;

})(window);