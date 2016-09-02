import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../routes';

var Root = React.createClass({

	render: function () {
		
		return (
			<div>
				<Provider store={this.props.store}>
					<Router history={browserHistory}>	
						{routes()}
					</Router>
				</Provider>
			</div>
		);
	}
});

module.exports = Root;