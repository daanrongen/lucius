import React from 'react'
import { Link } from '@reach/router'
import { Breadcrumb } from './Breadcrumb.js'

import profilePicture from '../img/profile-picture.jpg'
import weekProgress from '../img/week-progress.svg'
import editButtonWhite from '../img/edit-button-white.svg'
import editButtonRed from '../img/edit-button-red.svg'
import editButtonBlue from '../img/edit-button-blue.svg'

export class Overview extends React.Component {
	render() {
		return (
			<main id="overview">
				<article>
					<nav>
						<Breadcrumb root="profile" />
						<h1>overview</h1>
					</nav>
					<div id="userInformation">
						<img src={profilePicture} alt="user profile" />
						<ul>
							<li>
								<h2>name</h2>
								<span>{this.props.data.username}</span>
							</li>
							<li>
								<h2>workweek</h2>
								<span>{this.props.data.workweek}</span>
							</li>
						</ul>
						<img
							src={editButtonWhite}
							className="editButtonWhite"
							alt="edit button"
						/>
					</div>
				</article>
				<div id="userGoals">
					<h2>your goals</h2>
					<div>
						{this.props.data.userGoalOne}{' '}
						<Link to="goal-setings">
							<img
								src={editButtonBlue}
								className="editButtonBlue"
								alt="edit button"
							/>
						</Link>
					</div>
					<div>
						{this.props.data.userGoalTwo}
						<Link to="goal-setings">
							<img
								src={editButtonRed}
								className="editButtonRed"
								alt="edit button"
							/>
						</Link>
					</div>
					<div>
						{this.props.data.userGoalThree}
						<Link to="goal-setings">
							<img
								src={editButtonWhite}
								className="editButtonWhite"
								id="editButtonGreenBackground"
								alt="edit button"
							/>
						</Link>
					</div>
				</div>
				<div className="weekProgress" id="weekProgressOverview">
					<h2>this week's progress</h2>
					<img src={weekProgress} alt="weekProgress" />
				</div>
			</main>
		)
	}
}
