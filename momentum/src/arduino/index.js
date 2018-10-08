let fs = require("fs");
let five = require("johnny-five");
let csv = require("csv");

let dataFile = fs.createWriteStream("data.csv");
let presence = false;
let inChairMovement = false;

new five.Board().on("ready", function() {
  let fsr = new five.Sensor({
    pin: "A1",
    freq: 1000
  });

  let imu = new five.IMU({
    controller: "MPU6050",
    address: 0x68 // optional
  });

  let led = new five.Led(2);
  this.repl.inject({
    led: led
  });

  fsr.scale([0, 255]).on("data", function() {
    if (this.value > 20) {
      presence = true;

      imu.on("data", function() {
        if (this.gyro.yaw.rate > 10 || this.gyro.yaw.rate < -10) {
          inChairMovement = true;
        } else {
          inChairMovement = false;
        }
      });
    } else {
      presence = false;
      inChairMovement = false;
    }

    let time = Math.floor(new Date() / 1000);

    console.log(
      "time: ",
      time,
      "presence: ",
      presence,
      "in-chair movement: ",
      inChairMovement
    );

    dataFile.write(
      time.toString() +
        "," +
        presence.toString() +
        "," +
        inChairMovement.toString() +
        "\n"
    );

    if (presence && !inChairMovement) {
      led.on();
    } else {
      led.off();
    }
  });
});
