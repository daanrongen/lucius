const fs = require('fs')
const five = require('johnny-five')

const dataFile = fs.createWriteStream('../momentum/public/data.csv')
let presence = false
let inChairMovement = false
let counter = 0
let movementCounterArray = []

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

	relay.off()

	imu.on('data', function() {
		if (presence) {
			if (this.gyro.yaw.rate > 2 || this.gyro.yaw.rate < -2) {
				counter++
			}
		}
	})

	fsr.scale([0, 255]).on('data', function() {
		if (this.value > 20) {
			presence = true
		} else {
			presence = false
			relay.off()
			movementCounterArray = []
		}

		movementCounterArray.unshift(counter)
		counter = 0
		console.log(movementCounterArray)

		if (presence) {
			if (movementCounterArray.length > 10) {
				movementCounterArray.pop()
				let total = 0
				for (let i = 0; i < 10; i++) {
					const element = movementCounterArray[i]
					total += element
				}
				console.log('icm-calculation: ' + total)
				if (total < 200) {
					inChairMovement = false
					relay.on()
				} else {
					inChairMovement = true
					relay.off()
				}
			}
		}

		const time = Math.floor(new Date() / 1000)

		// console.log(
		// 	'time: ',
		// 	time,
		// 	'presence: ',
		// 	presence,
		// 	'in-chair movement: ',
		// 	inChairMovement
		// )

		dataFile.write(
			time.toString() +
				',' +
				presence.toString() +
				',' +
				inChairMovement.toString() +
				'\n'
		)
	})
})
