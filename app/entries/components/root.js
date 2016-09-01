import React from 'react';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../routes';

var Root = React.createClass({

	render: function () {
		
		return (
			<div>
				<Provider store={this.props.store}>
					<Router history={hashHistory}>	
						{routes()}
					</Router>
				</Provider>
			</div>
		);
	}
});

module.exports = Root;