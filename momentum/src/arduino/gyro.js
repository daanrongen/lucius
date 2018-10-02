var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var accelerometer = new five.IMU({
    controller: "MPU6050"
  });

  accelerometer.on("calibrated", function(err, data) {
    console.log("ik ben gecalibreerd");
  });

  accelerometer.on("data", function(err, data) {
    console.log(
      "Accelerometer: %d, %d, %d",
      this.accelerometer.x,
      this.accelerometer.z,
      this.accelerometer.z
    );
    console.log("Gyro: %d, %d, %d", this.gyro.x, this.gyro.z, this.gyro.z);
    console.log("Temperature: %d", this.temperature.celsius);
  });
});
