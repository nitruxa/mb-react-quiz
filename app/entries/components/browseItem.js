import browseStyles from "../css/browse.css";

import React from 'react';

import Price from './price.js';
import SetFavoriteIcon from '../containers/setFavoriteIcon.js';

var BrowseItem = React.createClass({

	render: function () {
		return (
			<div className={browseStyles.browseItemContainer}>
				<table className={browseStyles.browseItemTable}>
					<tbody>
						<tr>
							<td colSpan="2">
								<img src={this.props.item.image} />
							</td>
						</tr>
						<tr>
							<td className={browseStyles.priceCell}>
								<Price price={this.props.item.price} />
							</td>
							<td className={browseStyles.favoriteCell}>
								<SetFavoriteIcon />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = BrowseItem;