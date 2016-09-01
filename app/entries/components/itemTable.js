import itemStyles from "../css/item.css";

import React from 'react';
import ReactDOM from 'react-dom';

import ItemImage from './itemImage.js';
import ItemData from './itemData.js';
import ItemDescr from './itemDescr.js';

var ItemTable = React.createClass({
	
	render: function () {
		
		var item = this.props.item;
		
		var table = item ? (
			<table className={itemStyles.itemTable}>
				<tbody>
					<tr>
						<td rowSpan="2" className={itemStyles.imageCell}>
							<ItemImage item={item} />
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