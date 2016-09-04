import browseStyles from "../css/browse.css";

import React from 'react';
import { Link } from 'react-router';

import Price from './price.js';
import FavIconContainer from '../containers/favIconContainer.js';

class BrowseItem extends React.Component {
	
	shouldComponentUpdate (nextProps) {
		return nextProps.item.favorite !== this.props.item.favorite;
	}
	
	render () {

		return (
			<div className={browseStyles.browseItem}>
				<div className={browseStyles.browseItemImage}>
					<Link to={'/item/' + this.props.item.id}>
			 			<img src={this.props.item.image} />
			 		</Link>
		 		</div>
		 		<div className={browseStyles.browseItemPrice}>
		 			<Price price={this.props.item.price} />
		 		</div>
		 		<div className={browseStyles.browseItemFav}>
		 			<FavIconContainer item={this.props.item} itemList={true} />
		 		</div>
			</div>
		);
	}
}

export default BrowseItem;