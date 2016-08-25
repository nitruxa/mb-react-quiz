
import sharedStyles from "./shared/shared.css";

{/*import $ from 'jquery';*/}
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, IndexLink, Link } from 'react-router'

import BrowsePage from './browse/browsePage.js';

(function () {
	'use strict';
	
	var App = React.createClass({

		render: function () {
			
			return (
				<div className={sharedStyles.content}>
		
					<BrowsePage />
								
				</div>
			);
		}
	});
	
	ReactDOM.render(
		<Router history={hashHistory}>	
			<Route path="/" component={App}>
			
			</Route>
		</Router>,
		document.getElementById('root')
	);
	
})();