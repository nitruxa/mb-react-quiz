import browseStyles from "../css/browse.css";

import React from 'react';
import ReactDOM from 'react-dom';

import BrowseTableRow from './browseTableRow.js';
import { ADD_ITEMS, CELLS_IN_ROW } from '../constants';

var BrowseTable = React.createClass({
	
	handleFavIconClick: function (params) {
		this.props.onFavIconClick(params);
	},
	/*
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
	
	componentDidUpdate: function () {
		this.focusOnNewItems();
	},
	*/
	getRows: function () {
		var rows = [];			
		var i, rowCnt = 1, lng = this.props.items.length;
		
		for (i = 0; i < lng; i += CELLS_IN_ROW) {
			var rowItems = this.props.items.slice(i, i + CELLS_IN_ROW);
			//var rowId = this.getRowId(rowCnt);
			//ref={rowId}
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