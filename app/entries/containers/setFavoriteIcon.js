import sharedStyles from "../css/shared.css";
import React from 'react';
import { connect } from 'react-redux';

var FavoriteIcon = React.createClass({

	render: function () {
		var heartSrc = '/img/heart_empty_24.png';
		
		
		return (
			<div>
				<img className={sharedStyles.favoriteIcon} src={heartSrc} />			
			</div>
		);
	}
});

const SetFavoriteIcon = connect(
		
)(FavoriteIcon);

export default SetFavoriteIcon;