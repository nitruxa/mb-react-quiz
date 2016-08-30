import sharedStyles from "./css/shared.css";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'

import actions from './actions'
import reducer from './reducers'

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
	
	const store = createStore(
				reducer,
			  applyMiddleware(
			    thunkMiddleware
			  )
			)
			
	console.log(store.getState())
		
	store.dispatch(actions.itemList.fetchData(9)).then(() =>
	  console.log(store.getState())
	)
	
	
	ReactDOM.render(
			<App />,
			document.getElementById('root')
		);
	
	
	
})();