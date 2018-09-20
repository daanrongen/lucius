let timestamp = require("unix-timestamp");
let five = require("johnny-five"),
  fsr;

let presence = false;

new five.Board().on("ready", function() {
  fsr = new five.Sensor({
    pin: "A1",
    freq: 1000
  });

  fsr.scale([0, 255]).on("data", function() {
    if (this.value > 40) {
      presence = true;
    } else {
      presence = false;
    }
    console.log(presence);
  });
});
