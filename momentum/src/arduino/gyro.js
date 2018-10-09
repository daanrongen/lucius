const five = require('johnny-five')

const board = new five.Board()

const inChairMovement = false

board.on('ready', () => {
	const imu = new five.IMU({
		controller: 'MPU6050',
		address: 0x68 // optional
	})

	imu.on('data', function() {
		if (this.gyro.yaw.rate <= 0) {
			this.gyro.yaw.rate * -1
		}
		console.log(this.gyro.yaw.rate)
	})
})
