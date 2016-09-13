import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../routes';

class Root extends React.Component {

	render () {

		return (
			<Provider store={this.props.store}>
				<Router history={browserHistory}>
					{routes()}
				</Router>
			</Provider>
		);
	}
}

export default Root;