import React from 'react'
import { Link } from '@reach/router'

export class Menu extends React.Component {
	render() {
		return (
			<nav id="menu">
				<ul>
					<li>
						<Link to="../profile">profile</Link>
					</li>
					<li>
						<Link to="/">personal insights</Link>
					</li>
					<li>
						<Link to="../buoy-settings">buoy settings</Link>
					</li>
					<li>
						<Link to="../about">about</Link>
					</li>
				</ul>
			</nav>
		)
	}
}
