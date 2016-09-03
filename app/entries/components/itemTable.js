import itemStyles from "../css/item.css";

import React from 'react';

import ItemImage from './itemImage.js';
import ItemData from './itemData.js';
import ItemDescr from './itemDescr.js';
import FavIconContainer from '../containers/favIconContainer.js';

class ItemTable extends React.Component {
	
	render () {
		
		var item = this.props.item;
		
		var table = item ? (
			<table className={itemStyles.itemTable}>
				<tbody>
					<tr>
						<td rowSpan="2" className={itemStyles.imageCell}>
							<ItemImage key={item.id + '|img'} item={item} />
							<div className={itemStyles.favIconCont}>
								<FavIconContainer item={item} itemList={false} />
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
}

export default ItemTable;