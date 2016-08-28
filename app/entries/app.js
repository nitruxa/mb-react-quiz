import sharedStyles from "./shared/shared.css";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, IndexLink, Link } from 'react-router'

import BrowsePage from './browse/browsePage.js';

(function () {
	
	var App = React.createClass({

		render: function () {
			
			return (
				<div className={sharedStyles.content}>
					{this.props.children}			
				</div>
			);
		}
	});
	
	ReactDOM.render(
		<Router history={hashHistory}>	
			<Route path="/" component={App}>
				<IndexRoute component={BrowsePage}/>
			</Route>
		</Router>,
		document.getElementById('root')
	);
	
})();