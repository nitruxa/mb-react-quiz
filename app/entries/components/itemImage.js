import itemStyles from "../css/item.css";

import React from 'react';

var ItemImage = React.createClass({
	
	shouldComponentUpdate: function () {
		return false;
	},

	render: function () {
		
		return (
			<div>
				<img src={this.props.item.image} />
			</div>
		);
	}
});

module.exports = ItemImage;