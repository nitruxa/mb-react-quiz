import itemStyles from "../css/item.css";

import React from 'react';

class ItemImage extends React.Component {
	
	shouldComponentUpdate () {
		return false;
	}

	render () {
		
		return (
			<div>
				<img src={this.props.item.image} />
			</div>
		);
	}
}

export default ItemImage;