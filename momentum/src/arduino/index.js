let fs = require("fs");
let dataFile = fs.createWriteStream("data.csv");
let five = require("johnny-five");

let presence = false;
let inChairMovement = false;

new five.Board().on("ready", function() {
  fsr = new five.Sensor({
    pin: "A1",
    freq: 1000
  });

  let imu = new five.IMU({
    controller: "MPU6050",
    address: 0x68 // optional
  });

  let time = Math.floor(new Date() / 1000);

  fsr.scale([0, 255]).on("data", function() {
    if (this.value > 20) {
      presence = true;
    } else {
      presence = false;
    }
  });

  imu.on("data", function() {
    if (presence) {
      if (this.gyro.yaw.rate > 10 || this.gyro.yaw.rate < -10) {
        inChairMovement = true;
      } else {
        inChairMovement = false;
      }
    }
    console.log(
      "time: ",
      time,
      "presence: ",
      presence,
      "inchairmovement: ",
      inChairMovement
    );
  });
});
