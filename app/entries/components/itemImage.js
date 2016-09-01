import itemStyles from "../css/item.css";

import React from 'react';
import ReactDOM from 'react-dom';

import FavIcon from './favIcon.js';

var ItemImage = React.createClass({
	
	handleFavIconClick: function () {
		this.props.onFavIconClick();
	},

	render: function () {
		
		return (
			<div style={{position: 'relative', height: '100%'}}>
				<img src={this.props.item.image} />
				<div style={{position: 'absolute', top: 10, right: 10}}>
					<FavIcon fav={this.props.item.favorite} onFavIconClick={this.handleFavIconClick} />
				</div>
			</div>
		);
	}
});

module.exports = ItemImage;