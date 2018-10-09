const fs = require('fs')
const five = require('johnny-five')

const dataFile = fs.createWriteStream('../momentum/assets/data.csv')
let presence = false
let inChairMovement = false

new five.Board().on('ready', function() {
	const fsr = new five.Sensor({
		pin: 'A1',
		freq: 1000
	})

	const imu = new five.IMU({
		controller: 'MPU6050',
		address: 0x68 // optional
	})

	const led = new five.Led(2)
	this.repl.inject({
		led
	})

	fsr.scale([0, 255]).on('data', function() {
		if (this.value > 20) {
			presence = true

			imu.on('data', function() {
				if (this.gyro.yaw.rate > 10 || this.gyro.yaw.rate < -10) {
					inChairMovement = true
				} else {
					inChairMovement = false
				}
			})
		} else {
			presence = false
			inChairMovement = false
		}

		const time = Math.floor(new Date() / 1000)

		console.log(
			'time: ',
			time,
			'presence: ',
			presence,
			'in-chair movement: ',
			inChairMovement
		)

		dataFile.write(
			time.toString() +
				',' +
				presence.toString() +
				',' +
				inChairMovement.toString() +
				'\n'
		)

		if (presence && !inChairMovement) {
			led.on()
		} else {
			led.off()
		}
	})
})
