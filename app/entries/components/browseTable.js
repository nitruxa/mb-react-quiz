import browseStyles from "../css/browse.css";

import React from 'react';

import BrowseTableRow from './browseTableRow.js';

var BrowseTable = React.createClass({

	render: function () {
		var rows = [];
		var cellsInRow = 3;
		
		var allItems = this.props.items;
		var i, crowCnt = 1, lng = allItems.length;
		
		for (i = 0; i < lng; i += cellsInRow) {
			var rowItems = allItems.slice(i, i + cellsInRow);
			
			rows.push(
				<BrowseTableRow key={crowCnt + "|tr"} items={rowItems} />
			);
			
			crowCnt++;
		}
		
		return (
			<table className={browseStyles.browseTable}>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
});

module.exports = BrowseTable;