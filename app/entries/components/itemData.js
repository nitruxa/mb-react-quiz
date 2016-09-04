import itemStyles from "../css/item.css";

import React from 'react';

import Price from './price.js';

class ItemData extends React.Component {
	
	shouldComponentUpdate () {
		return false;
	}
	
	render () {
		
		return (
			<div className={itemStyles.dataContainer}>
				<div className={itemStyles.dataTop}>
					<div className={itemStyles.header2}>{this.props.item.title}</div>
					<div className={itemStyles.header2} style={{marginTop: 10, marginBottom: 10}}><Price price={this.props.item.price} /></div>
					<div className={itemStyles.header3}>Measurements:</div>
					<div>H {this.props.item.measurements.height} Dm {this.props.item.measurements.diameter}</div>
				</div>
				<div className={itemStyles.purchaseBtn}>PURCHASE</div>
				<div className={itemStyles.offerBtn}>MAKE OFFER</div>
			</div>
		);
	}
}

export default ItemData;