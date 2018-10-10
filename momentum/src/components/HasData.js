const React = require('react')
const TimeFormat = require('hh-mm-ss')
const d3 = require('d3')

export class HasData extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData() {
		const self = this
		d3.csv(`${process.env.PUBLIC_URL}/data.csv`).then(result => {
			let length = result.length - 1
			let firstEntryTimestamp = parseInt(result[0].timestamp)
			let lastEntryTimestamp = parseInt(result[length].timestamp)
			let timePassed = TimeFormat.fromS(
				lastEntryTimestamp - firstEntryTimestamp
			)
			console.log('Total time: ', timePassed)

			let totalTrue = 0
			let totalFalse = 0
			let firstEntryPresence = result[0].presence
			let currentEntryPresence = false
			let timeArray = []
			let boolArray = []

			for (let i = 0; i < result.length; i++) {
				currentEntryPresence = result[i].presence
				if (firstEntryPresence !== currentEntryPresence) {
					let currentEntryTimestamp = parseInt(result[i].timestamp)
					let difference = TimeFormat.fromS(
						currentEntryTimestamp - firstEntryTimestamp
					)

					timeArray.push(difference)
					if (currentEntryPresence === 'true') {
						boolArray.push(true)
					} else {
						boolArray.push(false)
					}

					firstEntryPresence = currentEntryPresence
					firstEntryTimestamp = currentEntryTimestamp
				}
			}
			console.log(timeArray)
			console.log(boolArray)

			for (let i = 0; i < boolArray.length; i++) {
				if (boolArray[i]) {
					let intToAdd = TimeFormat.toS(timeArray[i])
					totalTrue += intToAdd
					console.log(timeArray[timeArray.length - 1])
				}

				if (!boolArray[i]) {
					let intToAdd = TimeFormat.toS(timeArray[i])
					totalFalse += intToAdd
				}
			}
			console.log(totalTrue)
			let seatedPercentage = ((totalTrue / length) * 100).toFixed(0)
			console.log('Seated percentage', seatedPercentage, '%')

			const data = {
				username: 'Daan Rongen',
				workweek: 'full-time',
				buoyId: 4210,
				connectionStatus: 'connected',
				battery: 80,
				doNotDisturbMode: 'deactivated',
				arrivedAtWork: '09:00',
				timePassed: timePassed,
				timeSeated: TimeFormat.fromS(272),
				percentageSeated: seatedPercentage,
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

			self.setState({ data: data })
		})
	}

	render() {
		const { component } = this.props
		const data = this.state.data
		return React.createElement(component, { data: data })
	}
}
