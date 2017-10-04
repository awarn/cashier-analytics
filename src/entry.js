
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('root'))

if(process.env.NODE_ENV == 'development' && module.hot) {
	module.hot.accept('./components/App.js', () => {
		const NewApp = require('./components/App.js').default;
		ReactDOM.render((
			<BrowserRouter>
				<NewApp />
			</BrowserRouter>
		), document.getElementById('root'));
	});
}
