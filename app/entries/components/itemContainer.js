import itemStyles from "../css/item.css";

import React from 'react';

import ItemHeader from './itemHeader.js';
import ItemImage from './itemImage.js';
import ItemData from './itemData.js';
import ItemDescr from './itemDescr.js';
import FavIconContainer from '../containers/favIconContainer.js';

class ItemContainer extends React.Component {
	
	componentDidMount () {
		this.props.fetchItem(this.props.id);
	}
	
	render () {
		
		var itemCont = this.props.item ? (
			<div>
				<ItemHeader key={this.props.item.id + '|header'} item={this.props.item} />
				<div className={itemStyles.itemOuterContainer}>
					<div className={itemStyles.itemContainer}>
						<div className={itemStyles.itemImage}>
							<ItemImage key={this.props.item.id + '|img'} item={this.props.item} />
							<div className={itemStyles.favIconCont}>
								<FavIconContainer item={this.props.item} itemList={false} />
							</div>
						</div>
						<div className={itemStyles.itemData}>
							<ItemData key={this.props.item.id + '|data'} item={this.props.item} />
						</div>
						<div className={itemStyles.itemDescr}>
							<ItemDescr key={this.props.item.id + '|descr'} item={this.props.item} />
						</div>
					</div>
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