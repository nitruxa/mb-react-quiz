import React from 'react';

import Header from '../shared/header.js';

var BrowseTable = React.createClass({

	render: function () {
		
		return (
			<div>Browse Table ...</div>
		);
	}
});

var LoadButton = React.createClass({

	render: function () {
		
		return (
			<div>Load Button</div>
		);
	}
});


var BrowsePage = React.createClass({

	render: function () {
		
		return (
			<div>
				<Header title="Browse page" />
				<BrowseTable />
				<LoadButton />
			</div>
		);
	}
});

module.exports = BrowsePage;