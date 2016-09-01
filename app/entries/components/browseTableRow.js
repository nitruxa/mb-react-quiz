import browseStyles from "../css/browse.css";

import React from 'react';

import BrowseItemCell from './browseItemCell.js';

var BrowseTableRow = React.createClass ({
	
	render: function () {
		
		return (
			<tr>
				{this.props.items.map(function(item) {
						return (
							<BrowseItemCell key={item.id + '|cell'} item={item} />
						);
					}
				)}
			</tr>
		);
	}
});

module.exports = BrowseTableRow;