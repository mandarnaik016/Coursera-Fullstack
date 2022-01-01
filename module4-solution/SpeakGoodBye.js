(function (window) {
  var byeSpeaker = {};
  byeSpeaker.speak = function speak(name) {
    console.log("Good Bye " + name);
  };
  window.byeSpeaker = byeSpeaker;
})(window);
