var five = require("johnny-five");
var board = new five.Board();

let inChairMovement = false;

board.on("ready", function() {
  let imu = new five.IMU({
    controller: "MPU6050",
    address: 0x68 // optional
  });

  imu.on("data", function() {
    if (this.gyro.yaw.rate <= 0) {
      this.gyro.yaw.rate * -1;
    }
    console.log(this.gyro.yaw.rate);
  });
});
