import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './reducers';
import Root from './containers/root.js';

(function () {
	
	const loggerMiddleware = createLogger();
	
	const store = createStore(reducer, applyMiddleware( thunkMiddleware, loggerMiddleware ));
	
	ReactDOM.render(
			<Root store={store} />,
			document.getElementById('root')
	);

})();