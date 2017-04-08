<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Module 4 Solution Starter</title>
  <script src="SpeakHello.js"></script>
  <script src="SpeakGoodBye.js"></script>
  <script src="script.js"></script>
  
</head>
<body>
  <h1>Module 4 Solution Starter</h1>
  var speakWord = "Hello";
  function speak(sam) {
  	console.log(speakWord + "Hello" + sam);

  }
(function (window) {
	var johnGreeter = {};
	johnGreeter.name =  "John";
	var greeting = "Hi ";
	johnGreeter.sayHi = function () {
		console.log(greeting + johnGreeter.name);
	}

     window.johnGreeter = johnGreeter;

}) (window);


(function (window) {
	var yaakovGreeter = {};
	yaakovGreeter.name = "Yaakov";
	var greeting = "Hello ";
	yaakovGreeter.sayHello = function () {
		console.log(greeting + yaakovGreeter.name);
      }

         window.yaakovGreeter = yaakovGreeter;


})(window);


 function speak(name) {
 	console.log(speakWord + " " + name);
 		
 }

var speakWord = "Good Bye";

var byeSpeaker =  






</body>
</html>