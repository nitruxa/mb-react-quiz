import commonStyles from "../css/common.css";
import React from 'react';
import { connect } from 'react-redux';

var FavIcon = React.createClass({
	
	handleFavIconClick: function () {
		this.props.onFavIconClick();
	},

	render: function () {
		var heartSrc = this.props.fav ? '/img/heart_24.png' : '/img/heart_empty_24.png';
		
		return (
			<div>
				<img onClick={this.handleFavIconClick} className={commonStyles.favoriteIcon} src={heartSrc} />			
			</div>
		);
	}
});

module.exports = FavIcon;