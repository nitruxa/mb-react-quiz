import itemStyles from "../css/item.css";

import React from 'react';

var ItemData = React.createClass({
	
	shouldComponentUpdate: function () {
		return false;
	},
	
	render: function () {
		
		return (
			<div>
				{this.props.item.description}
				<div style={{marginTop: 20}}><span className={itemStyles.header3}>Creator: </span>{this.props.item.creators}</div>
			</div>
		);
	}
});

module.exports = ItemData;