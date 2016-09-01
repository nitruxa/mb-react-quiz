import browseStyles from "../css/browse.css";

import React from 'react';
import ReactDOM from 'react-dom';

import BrowseTableRow from './browseTableRow.js';
import { ADD_ITEMS, CELLS_IN_ROW } from '../constants';

var BrowseTable = React.createClass({
	
	getRowId: function (nr) {
		return (nr + '|tr');
	},
	
	focusOnNewItems: function () {
		if (this.props.items && (this.props.items.length > ADD_ITEMS)) {
			var loads = Math.ceil(this.props.items.length / ADD_ITEMS);			
			var linesPerLoad = Math.ceil(ADD_ITEMS / CELLS_IN_ROW);
			var lineNr = (linesPerLoad * (loads - 1)) + 1;
			
			ReactDOM.findDOMNode(this.refs[this.getRowId(lineNr)]).scrollIntoView();
		}
	},
	
	getRows: function () {
		var rows = [];			
		var i, rowCnt = 1, lng = this.props.items.length;
		
		for (i = 0; i < lng; i += CELLS_IN_ROW) {
			var rowItems = this.props.items.slice(i, i + CELLS_IN_ROW);
			var rowId = this.getRowId(rowCnt);
			rows.push(
				<BrowseTableRow ref={rowId} key={rowId} items={rowItems} />
			);
			
			rowCnt++;
		}
		return rows;
	},
	
	componentDidUpdate: function () {
		this.focusOnNewItems();
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