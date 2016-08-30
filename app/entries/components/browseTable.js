import browseStyles from "../css/browse.css";

import React from 'react';

import BrowseTableRow from './browseTableRow.js';

var BrowseTable = React.createClass({

	render: function () {
		
		var items = this.props.items;
	
		var getRows = function () {
			var rows = [];
			var cellsInRow = 3;
			
			var i, crowCnt = 1, lng = items.length;
			
			for (i = 0; i < lng; i += cellsInRow) {
				var rowItems = items.slice(i, i + cellsInRow);
				
				rows.push(
					<BrowseTableRow key={crowCnt + "|tr"} items={rowItems} />
				);
				
				crowCnt++;
			}
			return rows;
		};
		
		var table = items ? (
			<table className={browseStyles.browseTable}>
				<tbody>
					{getRows()}
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