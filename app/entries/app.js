import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { ADD_ITEMS } from './constants';
import reducer from './reducers';
import Root from './containers/root.js';

import actions from './actions';

(function () {
	
	const loggerMiddleware = createLogger();
	
	const store = createStore(reducer, applyMiddleware( thunkMiddleware, loggerMiddleware ));
	
	ReactDOM.render(
			<Root store={store} />,
			document.getElementById('root')
	);
	
	store.dispatch(actions.itemList.fetchData(ADD_ITEMS));
	
})();