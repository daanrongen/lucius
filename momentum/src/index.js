import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import { HasData } from './components/HasData.js'
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
				<HasData path="/" component={Summary} />
				<HasData path="/menu" component={Menu} />
				<HasData path="/sit-stand-variety" component={SitStandVariety} />
				<HasData path="/in-chair-movement" component={InChairMovement} />
				<HasData path="/sitting-posture" component={SittingPosture} />
				<HasData path="/profile" component={Overview} />
				<HasData path="/buoy-settings" component={BuoySettings} />
				<HasData path="/about" component={About} />
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
