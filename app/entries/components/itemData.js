import itemStyles from "../css/item.css";

import React from 'react';
import ReactDOM from 'react-dom';

import Price from './price.js';

var ItemData = React.createClass({
	
	shouldComponentUpdate: function () {
		return false;
	},
	
	render: function () {
		
		return (
			<table className={itemStyles.dataTable}>
				<tbody>
					<tr>
						<td colSpan="2">
							<div>
								{this.props.item.title}
							</div>
							<div>
								<Price price={this.props.item.price} />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div>PURCHASE</div>
						</td>
						<td>
							<div>MAKE OFFER</div>
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
});

module.exports = ItemData;