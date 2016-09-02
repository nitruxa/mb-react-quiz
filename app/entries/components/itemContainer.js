import itemStyles from "../css/item.css";

import React from 'react';

import ItemHeader from './itemHeader.js';
import ItemTable from './itemTable.js';

var ItemContainer = React.createClass({
	
	componentDidMount: function () {
		this.props.fetchItem(this.props.id);
	},
	
	render: function () {
		
		var itemCont = this.props.item ? (
			<div>
				<ItemHeader key={this.props.item.id + '|header'} item={this.props.item} />
				<div className={itemStyles.itemContainer}>
					<ItemTable item={this.props.item} onFavIconClick={() => this.props.onFavIconClick({
						id: this.props.item.id,
						favorite: !this.props.item.favorite
					})} />
				</div>
			</div>
		) : '';
		
		return (
			<div>
				{itemCont}
			</div>
		);
	}
});

module.exports = ItemContainer;