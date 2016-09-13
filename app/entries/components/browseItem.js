import browseStyles from "../css/browse.css";

import React, {PropTypes} from 'react';
import { Link } from 'react-router';

import Price from './price.js';
import FavIconContainer from '../containers/favIconContainer.js';

class BrowseItem extends React.Component {

	shouldComponentUpdate (nextProps) {
		return nextProps.item.favorite !== this.props.favorite;
	}

	render () {

		const {id, image, price} = this.props;

		return (
			<div className={browseStyles.browseItem}>
				<div className={browseStyles.browseItemImage}>
					<Link to={`/item/${id}`}>
			 			<img src={image} />
			 		</Link>
		 		</div>
		 		<div className={browseStyles.browseItemPrice}>
		 			<Price price={price} />
		 		</div>
		 		<div className={browseStyles.browseItemFav}>
		 			<FavIconContainer {...this.props} itemList />
		 		</div>
			</div>
		);
	}
}

BrowseItem.propTypes = {
	id: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	price: PropTypes.number,
	isFavorited: PropTypes.bool.isRequired
};

export default BrowseItem;