import browseStyles from "../css/browse.css";

import React from 'react';
import ReactDOM from 'react-dom';

import BrowseTableRow from './browseTableRow.js';
import { ADD_ITEMS, CELLS_IN_ROW } from '../constants';

var BrowseTable = React.createClass({
	
	focusOnNewItems: function () {
		if (this.props.items && (this.props.items.length > ADD_ITEMS)) {
			var loads = Math.ceil(this.props.items.length / ADD_ITEMS);			
			var linesPerLoad = Math.ceil(ADD_ITEMS / CELLS_IN_ROW);
			var lineNr = (linesPerLoad * (loads - 1)) + 1;
			
			ReactDOM.findDOMNode(this.refs[lineNr + '|tr']).scrollIntoView();
		}
	},
	
	componentDidUpdate: function () {
		this.focusOnNewItems();
	},

	render: function () {
		
		var items = this.props.items;
	
		var getRows = function () {
			var rows = [];			
			var i, rowCnt = 1, lng = items.length;
			
			for (i = 0; i < lng; i += CELLS_IN_ROW) {
				var rowItems = items.slice(i, i + CELLS_IN_ROW);
				
				rows.push(
					<BrowseTableRow ref={rowCnt + '|tr'} key={rowCnt + '|tr'} items={rowItems} />
				);
				
				rowCnt++;
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