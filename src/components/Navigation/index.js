
import React from "react"

export default class Navigation extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<nav>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/work">Work</a></li>
				</ul>
			</nav>
		)
	}
}

