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

			let entriesTotal = result.length - 1

			let entriesPresenceTrue = result.filter(
				entry => entry.presence === 'true'
			)

			let entriesIcmTrue = entriesPresenceTrue.filter(
				entry => entry.icm === 'true'
			)

			let icmPercentage = (
				(entriesIcmTrue.length / entriesPresenceTrue.length) *
				100
			).toFixed(0)

			let seatedPercentage = (
				(entriesPresenceTrue.length / entriesTotal) *
				100
			).toFixed(0)

			let resultsReversed = result.reverse()
			let latestPresenceEntryTimestamp = 0
			let latestSitSessionTimestamp = 0

			for (const [index, el] of resultsReversed.entries()) {
				if (el.presence === 'false') {
					break
				}

				if (index === 0) {
					latestPresenceEntryTimestamp = el.timestamp
				}

				latestSitSessionTimestamp = el.timestamp
			}

			let timeSeatedInSeconds =
				latestPresenceEntryTimestamp - latestSitSessionTimestamp

			let inChairMovementStatus
			if (icmPercentage > 50) {
				inChairMovementStatus = 'a lot'
			} else if (icmPercentage > 35) {
				inChairMovementStatus = 'enough'
			} else {
				inChairMovementStatus = 'a little'
			}

			console.log('Seated percentage: ', seatedPercentage, '%')
			console.log('In chair movement: ', icmPercentage, '%')

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
				currentSittingTime: TimeFormat.fromS(timeSeatedInSeconds, 'hh:mm:ss'),
				summaryAdvice: 'Stand up for 5 minutes',
				timeStanding: TimeFormat.fromS(54),
				sitStandVarietyAdvice: 'Try to work in 50 min. sets',
				inChairMovement: 82,
				inChairMovementStatus: inChairMovementStatus,
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
