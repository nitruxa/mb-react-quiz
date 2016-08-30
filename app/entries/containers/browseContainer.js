import browseStyles from "../css/browse.css";

import React from 'react';

import LoadButton from '../components/loadButton.js';
import BrowseTable from '../components/browseTable.js';

var BrowseContainer = React.createClass({
	render: function () {
		
		var items = [];
		
		return (
			<div>
				<div className={browseStyles.browseContainer}>
					<BrowseTable items={items} />
				</div>
				<LoadButton />
			</div>
		);
	}
});

module.exports = BrowseContainer;