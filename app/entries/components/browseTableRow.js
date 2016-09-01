import browseStyles from "../css/browse.css";

import React from 'react';

import BrowseItemCell from './browseItemCell.js';

var BrowseTableRow = React.createClass ({
	
	handleFavIconClick: function (params) {
		this.props.onFavIconClick(params);
	},
	
	render: function () {
		
		var handleFavIconClick = this.handleFavIconClick;
		
		return (
			<tr>
				{this.props.items.map(function(item) {
						return (
							<BrowseItemCell key={item.id + '|browseItemCell'} item={item} onFavIconClick={handleFavIconClick} />
						);
					}
				)}
			</tr>
		);
	}
});

module.exports = BrowseTableRow;