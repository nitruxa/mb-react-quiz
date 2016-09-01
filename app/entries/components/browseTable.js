import browseStyles from "../css/browse.css";

import React from 'react';

import BrowseTableRow from './browseTableRow.js';
import { ADD_ITEMS, CELLS_IN_ROW } from '../constants';

var BrowseTable = React.createClass({
	
	handleFavIconClick: function (params) {
		this.props.onFavIconClick(params);
	},
	
	getRows: function () {
		var rows = [];			
		var i, rowCnt = 1, lng = this.props.items.length;
		
		for (i = 0; i < lng; i += CELLS_IN_ROW) {
			var rowItems = this.props.items.slice(i, i + CELLS_IN_ROW);
			rows.push(
				<BrowseTableRow key={rowCnt + '|tr'} items={rowItems} onFavIconClick={this.handleFavIconClick} />
			);
			
			rowCnt++;
		}
		return rows;
	},
	
	render: function () {
		
		var table = this.props.items ? (
			<table className={browseStyles.browseTable}>
				<tbody>
					{this.getRows()}
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

module.exports = BrowseTable;