import itemStyles from "../css/item.css";

import React from 'react';
import ReactDOM from 'react-dom';

var ItemData = React.createClass({
	
	render: function () {
		
		return (
			<div>
				{this.props.item.description}
				<div style={{marginTop: 20}}><span style={{color: 'black'}}>Creator: </span>{this.props.item.creators}</div>
			</div>
		);
	}
});

module.exports = ItemData;