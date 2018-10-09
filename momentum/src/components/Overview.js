import React from 'react'
import { Link } from '@reach/router'
import { Breadcrumb } from './Breadcrumb.js'

// import data from '../../../arduino/dataReader.js'
import profilePicture from '../img/profile-picture.jpg'
import weekProgress from '../img/week-progress.svg'
import editButtonWhite from '../img/edit-button-white.svg'
import editButtonRed from '../img/edit-button-red.svg'
import editButtonBlue from '../img/edit-button-blue.svg'

const data = {}
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
								<span>{data.username}</span>
							</li>
							<li>
								<h2>workweek</h2>
								<span>{data.workweek}</span>
							</li>
						</ul>
						<img
							src={editButtonWhite}
							class="editButtonWhite"
							alt="edit button"
						/>
					</div>
				</article>
				<div id="userGoals">
					<h2>your goals</h2>
					<div>
						{data.userGoalOne}{' '}
						<Link to="goal-setings">
							<img
								src={editButtonBlue}
								class="editButtonBlue"
								alt="edit button"
							/>
						</Link>
					</div>
					<div>
						{data.userGoalTwo}
						<Link to="goal-setings">
							<img
								src={editButtonRed}
								class="editButtonRed"
								alt="edit button"
							/>
						</Link>
					</div>
					<div>
						{data.userGoalThree}
						<Link to="goal-setings">
							<img
								src={editButtonWhite}
								class="editButtonWhite"
								id="editButtonGreenBackground"
								alt="edit button"
							/>
						</Link>
					</div>
				</div>
				<div class="weekProgress" id="weekProgressOverview">
					<h2>this week's progress</h2>
					<img src={weekProgress} alt="weekProgress" />
				</div>
			</main>
		)
	}
}
