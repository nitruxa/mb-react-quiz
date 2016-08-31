import React from 'react';

import BrowseHeader from './browseHeader.js';
import BrowseLoadedContainer from '../containers/browseLoadedContainer.js';

var BrowsePage = React.createClass({

	render: function () {
		return (
			<div>
				<BrowseHeader />
				<BrowseLoadedContainer />
			</div>
		);
	}
});

module.exports = BrowsePage;