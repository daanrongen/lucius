const TimeFormat = require('hh-mm-ss')
const fs = require('fs')
let csv = require('csv')

// function MyCSV(Fone, Ftwo, Fthree) {
// 	this.FieldOne = Fone
// 	this.FieldTwo = Ftwo
// 	this.FieldThree = Fthree
// }

// let MyData = []

// csv()
// 	.from.path('./assets/data.csv')
// 	.to.array(function(data) {
// 		for (var index = 0; index < data.length; index++) {
// 			MyData.push(new MyCSV(data[index][0], data[index][1], data[index][2]))
// 		}
// 		let elapsedMillis = MyData[data.length - 1].FieldOne - MyData[0].FieldOne
// 		let elapsedTime = TimeFormat.fromMs(elapsedMillis * 10)
// 		console.log('Elapsed Time: ', elapsedTime)
// 	})

const data = {
	username: 'Daan Rongen',
	workweek: 'full-time',
	buoyId: 4210,
	connectionStatus: 'connected',
	battery: 80,
	doNotDisturbMode: 'deactivated',
	arrivedAtWork: '09:00',
	timePassed: '02:00',
	timeSeated: TimeFormat.fromS(272),
	percentageSeated: 78,
	currentSittingTime: TimeFormat.fromS(84),
	summaryAdvice: 'Stand up for 5 minutes',
	timeStanding: TimeFormat.fromS(54),
	sitStandVarietyAdvice: 'Try to work in 50 min. sets',
	inChairMovement: 82,
	inChairMovementStatus: 'a lot',
	inChairMovementAdvice: 'Keep both feet placed on the floor',
	totalStaticSittingTime: TimeFormat.fromS(52),
	postureDeviation: 'front-left',
	sittingPostureStatus: 'great',
	sittingPostureAdvice: 'Keep up the good work',
	buoyStatus: 'red',
	userGoalOne: 'Sit less than 70% of the workday',
	userGoalTwo: 'Have an in-chair movement up from 70%',
	userGoalThree: 'Maintain a good sitting posture'
}

module.exports = data
