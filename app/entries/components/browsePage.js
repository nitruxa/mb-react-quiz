import React from 'react';

import Header from './header.js';
import BrowseContainer from '../containers/browseContainer.js';

var BrowsePage = React.createClass({

	render: function () {
		return (
			<div>
				<Header title="Browse page" />
				<BrowseContainer />
			</div>
		);
	}
});

module.exports = BrowsePage;