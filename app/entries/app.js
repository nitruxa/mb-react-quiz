import sharedStyles from "./css/shared.css";

import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { fetchData } from './actions/appActions.js'
import app from './reducers/appReducers.js'

{/*
import { Router, Route, IndexRoute, hashHistory, IndexLink, Link } from 'react-router'
*/}

import BrowsePage from './components/browsePage.js';

(function () {
	
	var App = React.createClass({

		render: function () {
			
			return (
				<div className={sharedStyles.content}>
					{/*{this.props.children}*/}
					<BrowsePage />
				</div>
			);
		}
	});
	{/*
	ReactDOM.render(
		<Router history={hashHistory}>	
			<Route path="/" component={App}>
				<IndexRoute component={BrowsePage}/>
			</Route>
		</Router>,
		document.getElementById('root')
	);
	*/}
	
	

	ReactDOM.render(
			<App />,
			document.getElementById('root')
		);
	
	
	const store = createStore(
			  app,
			  applyMiddleware(
			    thunkMiddleware
			  )
			)
			
	console.log(store.getState())
	
	store.dispatch(fetchData(9)).then(() =>
	  console.log(store.getState())
	)
	
	
	
	
	
})();