let five = require("johnny-five"),
  fsr;

let presence = false;

new five.Board().on("ready", function() {
  fsr = new five.Sensor({
    pin: "A1",
    freq: 1000
  });

  fsr.scale([0, 255]).on("data", function() {
    let time = Math.floor(new Date() / 1000);
    console.log("time: ", time, "value: ", this.value);
  });
});
