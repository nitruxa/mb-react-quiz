import itemStyles from "../css/item.css";

import React from 'react';
import ReactDOM from 'react-dom';

var ItemData = React.createClass({
	
	render: function () {
		
		return (
			<div style={{width: '100%'}}>
				{this.props.item.title}
			</div>
		);
	}
});

module.exports = ItemData;