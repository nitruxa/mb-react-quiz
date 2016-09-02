import browseStyles from "../css/browse.css";

import React from 'react';

import BrowseItemCell from './browseItemCell.js';

var BrowseTableRow = React.createClass ({
	
	render: function () {
		
		var onFavIconClick = this.props.onFavIconClick;
		
		return (
			<tr>
				{this.props.items.map(function(item) {
						return (
							<BrowseItemCell key={item.id + '|browseItemCell'} item={item} onFavIconClick={onFavIconClick} />
						);
					}
				)}
			</tr>
		);
	}
});

module.exports = BrowseTableRow;