import browseStyles from '../css/browse.css';

import React from 'react';

var BrowseHeader = React.createClass({
	
	render: function () {
		
		return (
			<div className={browseStyles.browseHeader}>
				Browse Page
			</div>
		);
	}
});

module.exports = BrowseHeader;