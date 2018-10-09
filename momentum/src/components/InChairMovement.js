import React from 'react'
import { Link } from '@reach/router'
import { Breadcrumb } from './Breadcrumb.js'

import structure from '../fileStructure.js'
import inChairMovementGraph from '../img/in-chair-movement-graph.svg'
import nextCardButton from '../img/button-to-sp.svg'

const cardName = structure[2].name
const nextCard = structure[3].name

export class InChairMovement extends React.Component {
	render() {
		if (!this.props.data) {
			return <div>loading</div>
		} else {
			return (
				<main id={structure[2].url}>
					<article>
						<nav>
							<Breadcrumb root="personal insights" />
							<h1>{cardName}</h1>
						</nav>
						<p id="inChairMovementMain">
							While sitting you have been moving{' '}
							<span>{this.props.data.inChairMovementStatus}</span>, your Buoy
							detected sufficient movement{' '}
							<span>{this.props.data.inChairMovement}%</span> of the time.
						</p>
						<h2>In-chair movement graph</h2>
						<img src={inChairMovementGraph} alt="inChairMovementGraph" />
						<div className="legendICM">
							<ul>
								<li>
									<div id="sufficientLegend" />
									<p>sufficient movement</p>
								</li>
								<li>
									<div id="insufficientLegend" />
									<p>insufficient movement</p>
								</li>
							</ul>
						</div>
						<div className="adviceContainer">
							<ul>
								<li>
									<h2>current advice</h2>
									<span>{this.props.data.inChairMovementAdvice}</span>
								</li>
								<li>
									<h2>current sitting time</h2>
									<span>{this.props.data.timeSeated} hrs</span>
								</li>
								<li>
									<h2>in chair movement</h2>
									<span>{this.props.data.inChairMovement}%</span>
								</li>
							</ul>
						</div>
						<div className="scientificText">
							<h3>The best posture is the next posture</h3>
							<p>
								The healthiest thing that you can do for your posture is to move
								as much as possible and avoid maintaining any static posture for
								an extended period of time. Spending too much time in the same
								sitting posture can cause back- and neck problems.
							</p>
						</div>
						<p className="nextCardIntroduction">
							View your sitting posture on the next card and learn how to sit up
							right!
						</p>
					</article>
					<Link to="../sitting-posture">
						{nextCard}
						<img src={nextCardButton} alt="button icon for next card" />
					</Link>
				</main>
			)
		}
	}
}
