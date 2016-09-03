import commonStyles from "../css/common.css";
import React from 'react';

class FavIcon extends React.Component {

	render () {
		var heartSrc = this.props.item.favorite ? '/img/heart_24.png' : '/img/heart_empty_24.png';
		
		return (
			<div>
				<img onClick={() => this.props.onFavIconClick({
					id: this.props.item.id,
					favorite: !this.props.item.favorite,
					itemList: this.props.itemList
				})} className={commonStyles.favoriteIcon} src={heartSrc} />			
			</div>
		);
	}
}

export default FavIcon;