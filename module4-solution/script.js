(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];
  for (var i = 0; i < names.length; i++) {
    var check = names[i].charAt(0);
    if (check === "J" || check === "j") {
      console.log("Good Bye " + names[i]);
    } else {
      console.log("Hello " + names[i]);
    }
  }
})();
