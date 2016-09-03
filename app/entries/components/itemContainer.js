import itemStyles from "../css/item.css";

import React from 'react';

import ItemHeader from './itemHeader.js';
import ItemTable from './itemTable.js';

class ItemContainer extends React.Component {
	
	componentDidMount () {
		this.props.fetchItem(this.props.id);
	}
	
	render () {
		
		var itemCont = this.props.item ? (
			<div>
				<ItemHeader key={this.props.item.id + '|header'} item={this.props.item} />
				<div className={itemStyles.itemContainer}>
					<ItemTable item={this.props.item} />
				</div>
			</div>
		) : '';
		
		return (
			<div>
				{itemCont}
			</div>
		);
	}
}

export default ItemContainer;