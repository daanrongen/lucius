const Firebase = require("firebase");
var five = require("johnny-five"),
  fsr;

new five.Board().on("ready", function() {
  // Create a new `fsr` hardware instance.
  fsr = new five.Sensor({
    pin: "A1",
    freq: 25
  });

  // Scale the sensor's value to the LED's brightness range
  fsr.scale([0, 255]).on("data", function() {
    // console.log(this.value);
    if (this.value > 10) {
      console.log("someone is sitting");
    } else {
      console.log("No one present");
    }
  });
});

// FIREBASE CONFIG
// const config = {
//   apiKey: "AIzaSyCymfmV8YJIWe9w0iWryC-1mG_opk96K4U",
//   authDomain: "delta-4000.firebaseapp.com",
//   databaseURL: "https://delta-4000.firebaseio.com",
//   projectId: "delta-4000",
//   storageBucket: "delta-4000.appspot.com",
//   messagingSenderId: "388527815015"
// };
//
// Firebase.initializeApp(config);
//
// const firebaseRef = Firebase.database().ref();

// 1. Sensor uitlezen en stop deze in firebase
// 2. Firebase en React koppeling
// 3. React Frontend afmaken
