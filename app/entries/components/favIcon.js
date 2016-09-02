import commonStyles from "../css/common.css";
import React from 'react';

var FavIcon = React.createClass({

	render: function () {
		var heartSrc = this.props.fav ? '/img/heart_24.png' : '/img/heart_empty_24.png';
		
		return (
			<div>
				<img onClick={this.props.onFavIconClick} className={commonStyles.favoriteIcon} src={heartSrc} />			
			</div>
		);
	}
});

module.exports = FavIcon;