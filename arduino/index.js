const fs = require('fs')
const five = require('johnny-five')

const dataFile = fs.createWriteStream('../momentum/public/data.csv')
let presence = false
let inChairMovement = false

dataFile.write('timestamp,presence,icm' + '\n')

new five.Board().on('ready', function() {
	const fsr = new five.Sensor({
		pin: 'A1',
		freq: 1000
	})

	const imu = new five.IMU({
		controller: 'MPU6050',
		address: 0x68
	})

	const led = new five.Led(2)
	this.repl.inject({
		led
	})

	const relay = new five.Relay({
		pin: 10,
		type: 'NO'
	})

	fsr.scale([0, 255]).on('data', function() {
		console.log(this.id)

		if (this.value > 20) {
			presence = true

			imu.on('data', function() {
				if (this.gyro.yaw.rate > 2 || this.gyro.yaw.rate < -2) {
					console.log(this.gyro.yaw.rate)
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

		// let icmArray = []

		if (presence && !inChairMovement) {
			// this.wait(1000, function() {
			relay.on()
			// })
		} else {
			relay.off()
		}
	})

	this.repl.inject({
		on: function() {
			relay.on()
		}
	})
})
