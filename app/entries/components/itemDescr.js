import itemStyles from "../css/item.css";

import React from 'react';

class ItemDescr extends React.Component {
	
	shouldComponentUpdate () {
		return false;
	}
	
	render () {
		
		return (
			<div className={itemStyles.textWrapper}>
				{this.props.item.description}
				<div style={{marginTop: 20}}><span className={itemStyles.header3}>Creator: </span>{this.props.item.creators}</div>
			</div>
		);
	}
}

export default ItemDescr;