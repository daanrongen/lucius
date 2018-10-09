const five = require('johnny-five')

let fsr

const presence = false

new five.Board().on('ready', () => {
	fsr = new five.Sensor({
		pin: 'A1',
		freq: 1000
	})

	fsr.scale([0, 255]).on('data', function() {
		const time = Math.floor(new Date() / 1000)
		console.log('time: ', time, 'value: ', this.value)
	})
})
