import React from 'react'
import { Link } from '@reach/router'
import { Breadcrumb } from './Breadcrumb.js'

import structure from '../fileStructure.js'
import weekProgress from '../img/week-progress.svg'
import nextCardButton from '../img/button-to-ssv.svg'

const cardName = structure[0].name
const nextCard = structure[1].name

export class Summary extends React.Component {
	render() {
		if (!this.props.data) {
			return <div>loading</div>
		} else {
			return (
				<main id={structure[0].url}>
					<article>
						<nav>
							<Breadcrumb root={structure[0].root} />
							<h1>{cardName}</h1>
						</nav>
						<div id="quickStatusWrapper">
							<div
								id={
									this.props.data.percentageSeated > 70
										? 'quickStatusOneInsufficient'
										: 'quickStatusOneSufficient'
								}
							/>
							<div
								id={
									this.props.data.inChairMovementStatus === 'a little'
										? 'quickStatusTwoInsufficient'
										: 'quickStatusTwoSufficient'
								}
							/>
							<div
								id={
									this.props.data.sittingPostureStatus !== 'great'
										? 'quickStatusThreeInsufficient'
										: 'quickStatusThreeSufficient'
								}
							/>
						</div>
						<p id="summaryMain">
							You’ve spent{' '}
							<span
								className={
									this.props.data.percentageSeated > 70
										? 'statusOneInsufficient'
										: 'statusOneSufficient'
								}
							>
								{this.props.data.percentageSeated}%
							</span>{' '}
							of today’s time seated, while sitting you’ve moved{' '}
							<span
								className={
									this.props.data.inChairMovementStatus === 'a little'
										? 'statusTwoInsufficient'
										: 'statusTwoSufficient'
								}
							>
								{this.props.data.inChairMovementStatus}
							</span>
							, your sitting posture is{' '}
							<span
								className={
									this.props.data.sittingPostureStatus !== 'great'
										? 'statusThreeInsufficient'
										: 'statusThreeSufficient'
								}
							>
								{this.props.data.sittingPostureStatus}
							</span>
						</p>
						<div className="adviceContainer">
							<ul>
								<li>
									<h2>current advice</h2>
									<span>{this.props.data.summaryAdvice}</span>
								</li>
								<li>
									<h2>current sitting time</h2>
									<span>{this.props.data.currentSittingTime} hrs</span>
								</li>
								<li>
									<h2>seated percentage</h2>
									<span>{this.props.data.percentageSeated}%</span>
								</li>
							</ul>
						</div>
						<div className="goalsContainer">
							<h2>your goals</h2>
							<ul>
								<li>
									<div id="goalOneCheckbox" />
									<p>{this.props.data.userGoalOne}</p>
								</li>
								<li>
									<div id="goalTwoCheckbox" />
									<p>{this.props.data.userGoalTwo}</p>
								</li>
								<li>
									<div id="goalThreeCheckbox" />
									<p>{this.props.data.userGoalThree}</p>
								</li>
							</ul>
						</div>
						<div className="weekProgress">
							<h2>this week's progress</h2>
							<img src={weekProgress} alt="weekProgress" />
						</div>
					</article>
					<Link to="../sit-stand-variety">
						{nextCard}
						<img src={nextCardButton} alt="button icon for next card" />
					</Link>
				</main>
			)
		}
	}
}
