import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { store } from './redux/store';
import './styles/main.scss';
import PageContainer from './PageContainer';

import * as Sentry from '@sentry/browser';

Sentry.init({
 dsn: process.env.SENTRY_DSN
});
// should have been called before using it here
// ideally before even rendering your react app
// Sentry.configureScope((scope) => {
// 	scope.setTag('environment', process.env.NODE_ENV);
// });

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div className="min-1440">
				<PageContainer />
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
