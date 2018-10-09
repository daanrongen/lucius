import React from 'react'
import { Link } from '@reach/router'
import { Breadcrumb } from './Breadcrumb.js'

import structure from '../fileStructure.js'
// import data from '../../../arduino/dataReader.js'
import inChairMovementGraph from '../img/in-chair-movement-graph.svg'
import nextCardButton from '../img/button-to-sp.svg'

const data = {}
const cardName = structure[2].name
const nextCard = structure[3].name

export class InChairMovement extends React.Component {
	render() {
		return (
			<main id={structure[2].url}>
				<article>
					<nav>
						<Breadcrumb root="personal insights" />
						<h1>{cardName}</h1>
					</nav>
					<p id="inChairMovementMain">
						While sitting you have been moving{' '}
						<span>{data.inChairMovementStatus}</span>, your Buoy detected
						sufficient movement <span>{data.inChairMovement}%</span> of the
						time.
					</p>
					<h2>In-chair movement graph</h2>
					<img src={inChairMovementGraph} alt="inChairMovementGraph" />
					<div class="legendICM">
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
					<div class="adviceContainer">
						<ul>
							<li>
								<h2>current advice</h2>
								<span>{data.inChairMovementAdvice}</span>
							</li>
							<li>
								<h2>current sitting time</h2>
								<span>{data.timeSeated} hrs</span>
							</li>
							<li>
								<h2>in chair movement</h2>
								<span>{data.inChairMovement}%</span>
							</li>
						</ul>
					</div>
					<div class="scientificText">
						<h3>The best posture is the next posture</h3>
						<p>
							The healthiest thing that you can do for your posture is to move
							as much as possible and avoid maintaining any static posture for
							an extended period of time. Spending too much time in the same
							sitting posture can cause back- and neck problems.
						</p>
					</div>
					<p class="nextCardIntroduction">
						View your sitting posture on the next card and learn how to sit up
						right!
					</p>
				</article>
				<Link to="../sitting-posture">
					{nextCard}
					<img src={nextCardButton} />
				</Link>
			</main>
		)
	}
}
