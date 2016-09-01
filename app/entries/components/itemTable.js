import itemStyles from "../css/item.css";

import React from 'react';

import ItemImage from './itemImage.js';
import ItemData from './itemData.js';
import ItemDescr from './itemDescr.js';
import FavIcon from './favIcon.js';

var ItemTable = React.createClass({
	
	handleFavIconClick: function () {
		this.props.onFavIconClick();
	},
	
	render: function () {
		
		var item = this.props.item;
		
		var table = item ? (
			<table className={itemStyles.itemTable}>
				<tbody>
					<tr>
						<td rowSpan="2" className={itemStyles.imageCell}>
							<ItemImage key={item.id + '|img'} item={item} />
							<div className={itemStyles.favIconCont}>
								<FavIcon fav={item.favorite} onFavIconClick={this.handleFavIconClick} />
							</div>
						</td>
						<td className={itemStyles.dataCell}>
							<ItemData key={item.id + '|data'} item={item} />
						</td>
					</tr>
					<tr>
						<td className={itemStyles.descrCell}>
							<ItemDescr key={item.id + '|descr'} item={item} />
						</td>
					</tr>
				</tbody>
			</table>
		) : '';
				
		return (
			<div>
				{table}
			</div>
		);
	}
});

module.exports = ItemTable;