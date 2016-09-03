import browseStyles from "../css/browse.css";

import React from 'react';
import { Link } from 'react-router';

import Price from './price.js';
import FavIconContainer from '../containers/favIconContainer.js';

class BrowseItemCell extends React.Component {
	
	shouldComponentUpdate (nextProps) {
		return nextProps.item.favorite !== this.props.item.favorite;
	}
	
	render () {
		return (
			<td className={browseStyles.itemCell}>
				<table className={browseStyles.browseItemTable}>
					<tbody>
						<tr>
							<td colSpan="2">
							 	<Link to={'/item/' + this.props.item.id}>
							 		<img src={this.props.item.image} />
							 	</Link>
							 </td>
						</tr>
						<tr>
							<td className={browseStyles.priceCell}>
								<Price price={this.props.item.price} />
							</td>
							<td className={browseStyles.favoriteCell}>
								<FavIconContainer item={this.props.item} itemList={true} />
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		);
	}
}

export default BrowseItemCell;