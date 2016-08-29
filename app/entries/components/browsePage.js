import browseStyles from "../css/browse.css";

import React from 'react';

import Header from './header.js';
import BrowseItem from './browseItem.js';
import LoadButton from './loadButton.js';



var BrowseTableRow = React.createClass ({
	
	render: function () {
		var cells = [];
		this.props.items.forEach(function(item, inx) {
			cells.push(
				<td key={item.id + "|cell"} className={browseStyles.itemCell}>
					<BrowseItem key={item.id + "|item"} item={item} />
				</td>
			);
		});
		
		return (
			<tr>
				{cells}
			</tr>
		);
	}
});

var BrowseTable = React.createClass({

	render: function () {
		var rows = [];
		var cellsInRow = 3;
		
		var allItems = this.props.data.items;
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

var BrowseContainer = React.createClass({
	render: function () {
		
		var data = {items: []};
		
		return (
			<div className={browseStyles.browseContainer}>
				<BrowseTable data={data} />
			</div>
		);
	}
});

var BrowsePage = React.createClass({

	render: function () {
		return (
			<div>
				<Header title="Browse page" />
				<BrowseContainer />
				<LoadButton />
			</div>
		);
	}
});

module.exports = BrowsePage;