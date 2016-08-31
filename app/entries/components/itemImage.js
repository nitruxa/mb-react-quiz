import itemStyles from "../css/item.css";

import React from 'react';
import ReactDOM from 'react-dom';

import SetFavoriteIcon from '../containers/setFavoriteIcon.js';

var ItemImage = React.createClass({
	
	render: function () {
		
		return (
			<div style={{position: 'relative', height: '100%'}}>
				<img src={this.props.item.image} />
				<div style={{position: 'absolute', top: 10, right: 10}}>
					<SetFavoriteIcon />
				</div>
			</div>
		);
	}
});

module.exports = ItemImage;