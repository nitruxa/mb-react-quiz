import React from 'react';

import Header from './header.js';
import BrowseLoadedContainer from '../containers/browseLoadedContainer.js';

var BrowsePage = React.createClass({

	render: function () {
		return (
			<div>
				<Header title="Browse page" />
				<BrowseLoadedContainer />
			</div>
		);
	}
});

module.exports = BrowsePage;