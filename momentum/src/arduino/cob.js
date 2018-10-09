const five = require('johnny-five')

const board = new five.Board()

board.on('ready', function() {
	const led = new five.Led(2)

	// This will grant access to the led instance
	// from within the REPL that's created when
	// running this program.
	this.repl.inject({
		led
	})

	led.blink(1000)
})
