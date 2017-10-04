import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
/* import { Provider } from 'react-redux';
import { createStore } from 'redux'; */
import App from './components/app';
// import reducers from './reducers';

export default (req, res) => {
	if(process.env.NODE_ENV === 'development') {
		res.send(`
			<!doctype html>
			<html>
				<head>
					<title>Cashier</title>
				</head>
				<body>
					<div id='root'></div>
					<script src='bundle.js'></script>
				</body>
			</html>
		`);
	} else if(process.env.NODE_ENV === 'production') {
		res.send(`
			<!doctype html>
			<html>
				<head>
					<title>Cashier</title>
					<link rel='stylesheet' href='bundle.css'>
				</head>
				<body>
					<div id='root'>${renderToString(
						<StaticRouter location={req.url} context={{}}>
							<App />
						</StaticRouter>
					)}</div>
					<script src='bundle.js'></script>
				</body>
			</html>
		`);
	}
};
/* ${renderToString(
	<Provider store={createStore(reducers)}>
		<StaticRouter location={req.url} context={{}}>
			<App />
		</StaticRouter>
	</Provider>
)} */