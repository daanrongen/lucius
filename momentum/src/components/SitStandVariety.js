import React from 'react'
import { Link } from '@reach/router'
import { Breadcrumb } from './Breadcrumb.js'

import structure from '../fileStructure.js'
import sitStandGraph from '../img/sit-stand-graph.svg'
import sitStandVarietyExample from '../img/sit-stand-variety-example.svg'
import nextCardButton from '../img/button-to-icm.svg'

const cardName = structure[1].name
const nextCard = structure[2].name

export class SitStandVariety extends React.Component {
	render() {
		if (!this.props.data) {
			return <div>loading</div>
		} else {
			return (
				<main id={structure[1].url}>
					<article>
						<nav>
							<Breadcrumb root="personal insights" />
							<h1>{cardName}</h1>
						</nav>
						<p id="sitStandVarietyMain">
							You have been sitting for{' '}
							<span>{this.props.data.timeSeated} hrs</span> in total. Which is{' '}
							<span>{this.props.data.percentageSeated}%</span> of this workday.
						</p>
						<h2>Sit-Stand Graph</h2>
						<img src={sitStandGraph} alt="sitStandGraph" />
						<div className="adviceContainer">
							<ul>
								<li>
									<h2>current advice</h2>
									<span>{this.props.data.sitStandVarietyAdvice}</span>
								</li>
								<li>
									<h2>time spent in chair</h2>
									<span>{this.props.data.timeSeated} hrs</span>
								</li>
								<li>
									<h2>time spent out of chair</h2>
									<span>{this.props.data.timeStanding} hrs</span>
								</li>
							</ul>
						</div>
						<div className="scientificText">
							<h3>Stand up for your health</h3>
							<p>
								When you sit, blood flows slower and muscles burn less fat. By
								flexing the muscles in your calves you stimulate the flow of
								oxygenated blood through your body. This results in better
								concentration and mental comfort. The example below shows a
								graph of what a rhythmic sitting behaviour can look like. Find
								your own pace and try to maintain these intervals.
							</p>
							<img src={sitStandVarietyExample} alt="sitStandVarietyExample" />
						</div>
						<p className="nextCardIntroduction">
							Find out if you’ve been moving enough on the next card.
						</p>
					</article>
					<Link to="../in-chair-movement">
						{nextCard}
						<img src={nextCardButton} alt="button icon for next card" />
					</Link>
				</main>
			)
		}
	}
}
