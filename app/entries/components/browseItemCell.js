import browseStyles from "../css/browse.css";

import React from 'react';
import { Link } from 'react-router';

import Price from './price.js';
import FavIcon from './favIcon.js';

var BrowseItemCell = React.createClass({

	shouldComponentUpdate: function () {
		return false;
	},
	
	render: function () {
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
								<FavIcon />
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		);
	}
});

module.exports = BrowseItemCell;