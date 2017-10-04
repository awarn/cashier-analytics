
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Index from '../../routes/index'
import Work from '../../routes/work'

export default class Main extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={Index}/>
					{/* both /roster and /roster/:number begin with /roster */}
					<Route path='/work' component={Work}/>
				</Switch>
			</main>
		)
	}
}

