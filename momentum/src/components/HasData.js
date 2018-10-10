const React = require('react')
const TimeFormat = require('hh-mm-ss')
const d3 = require('d3')
const csv = require('../data.csv')

export class HasData extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData() {
		// csv shit
		// parsen
		// formatten

		d3.csv(csv).then(function(result) {
			let length = result.length - 1
			let firstEntryTimestamp = parseInt(result[0].timestamp)
			let lastEntryTimestamp = parseInt(result[length].timestamp)
			let timePassed = TimeFormat.fromS(
				lastEntryTimestamp - firstEntryTimestamp
			)
			console.log('total time: ', timePassed)
			// result.forEach(function(element) {
			// 	console.log(element.presence)
			// })

			//tijd hoelang false, tijd hoelang true, hoelang daarna weer false, hoelang daarna weer true, etc
			// wat hebben we hiervoor nodig?
			// een class met de hoeveelheid tijd en wat het is(true of false)
			// daarna een list waar deze in geadd worden.
			// loopen door de lost om "blokjes" te creeren

			let totalTrue = 0
			let totalFalse = 0

			let oldState
			let currentState = false

			oldState = result[0].presence // zet de eerste state van het zitten(true of false)

			let oldTime = parseInt(result[0].timestamp) // zet het eerste timestape
			let newTime
			let timeArray = [] // lege array met de tijden
			let boolArray = [] // lege array met de states

			for (let i = 0; i < result.length; i++) {
				currentState = result[i].presence // kijk naar de huidige states van de reults
				if (oldState !== currentState) {
					// is het resultaat anders van de vorige keer dat we iets aan de vorige status(true of false)

					newTime = parseInt(result[i].timestamp) // kijk naar de tijd van het laatste result
					let difference = TimeFormat.fromS(newTime - oldTime) // reken het verschil uit tussen onze oude tijd en nieuwe
					timeArray.push(difference) // voeg het verschil toe in de array
					if (currentState === 'true') {
						boolArray.push(true) // voeg de status toe
					} else {
						boolArray.push(false)
					}

					oldState = currentState // zet de waardes opnieuw zodat we naar het volgende verschil kunnen kijken
					oldTime = newTime // zie hierboven
				}
			}
			console.log(timeArray)
			console.log(boolArray)

			for (let i = 0; i < boolArray.length; i++) {
				if (boolArray[i]) {
					let intToAdd = TimeFormat.toS(timeArray[i])
					console.log(intToAdd)
					totalTrue += intToAdd
				}

				if (!boolArray[i]) {
					let intToAdd = TimeFormat.toS(timeArray[i])
					console.log(intToAdd)
					totalFalse += intToAdd
				}
			}
			console.log('Totalfalse: ', totalFalse)
			console.log('Totaltrue: ', totalTrue)
		})

		const data = {
			username: 'Daan Rongen',
			workweek: 'full-time',
			buoyId: 4210,
			connectionStatus: 'connected',
			battery: 80,
			doNotDisturbMode: 'deactivated',
			arrivedAtWork: '09:00',
			timePassed: TimeFormat.fromS(100),
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

		this.setState({ data: data })
	}

	render() {
		const { component } = this.props
		const data = this.state.data
		return React.createElement(component, { data: data })
	}
}
