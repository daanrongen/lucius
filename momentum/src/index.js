import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import { Menu } from './components/Menu.js'
import { Summary } from './components/Summary.js'
import { SitStandVariety } from './components/SitStandVariety.js'
import { InChairMovement } from './components/InChairMovement.js'
import { SittingPosture } from './components/SittingPosture.js'
import { Overview } from './components/Overview.js'
import { BuoySettings } from './components/BuoySettings.js'
import { About } from './components/About.js'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

class App extends React.Component {
	render() {
		return (
			<Router>
				<Summary path="/" />
				<Menu path="/menu" />
				<SitStandVariety path="/sit-stand-variety" />
				<InChairMovement path="/in-chair-movement" />
				<SittingPosture path="/sitting-posture" />
				<Overview path="/profile" />
				<BuoySettings path="/buoy-settings" />
				<About path="/about" />
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
