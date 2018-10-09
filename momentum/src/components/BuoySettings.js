import React from 'react'
import { Breadcrumb } from './Breadcrumb.js'

import cancelButton from '../img/cancel-button.svg'
import buoyVisual from '../img/buoy-status.png'
import batteryStatus from '../img/battery.svg'

export class BuoySettings extends React.Component {
	render() {
		if (!this.props.data) {
			return <div>loading</div>
		} else {
			return (
				<main id="buoySettings">
					<article>
						<nav>
							<Breadcrumb root="buoy settings" />
							<h1>remote control</h1>
						</nav>
						<div id="buoyConnection">
							<ul>
								<li>
									<h2>buoy connection</h2>
								</li>
								<li>
									<span>{this.props.data.connectionStatus}</span>
								</li>
								<li>
									<div id="connectionIndicator" />
								</li>
								<li>
									<img
										src={cancelButton}
										alt="cancel button"
										id="cancelButton"
									/>
								</li>
							</ul>
						</div>
						<div id="buoyInformation">
							<ul>
								<li>
									<h2>led signal</h2>
								</li>
								<li>
									<img id="buoyVisual" src={buoyVisual} alt="buoy visual" />
								</li>
							</ul>
							<ul>
								<li>
									<h2>battery</h2>
								</li>
								<li>
									<img src={batteryStatus} alt="battery icon 80%" />
								</li>
								<li>
									<h2>buoy id</h2>
									<span>{this.props.data.buoyId}</span>
								</li>
							</ul>
						</div>
						<div id="doNotDisturb">
							<ul>
								<li>
									<h2>do not disturb mode</h2>
									<span>{this.props.data.doNotDisturbMode}</span>
								</li>
							</ul>
						</div>
					</article>
				</main>
			)
		}
	}
}
