import browseStyles from "../css/browse.css";

import React from 'react';

import BrowseTableRow from './browseTableRow.js';
import { CELLS_IN_ROW } from '../constants';

class BrowseTable extends React.Component {
	
	getRows () {
		var rows = [];			
		var i, rowCnt = 1, lng = this.props.items.length;
		
		for (i = 0; i < lng; i += CELLS_IN_ROW) {
			var rowItems = this.props.items.slice(i, i + CELLS_IN_ROW);
			rows.push(
				<BrowseTableRow key={rowCnt + '|tr'} items={rowItems} />
			);
			
			rowCnt++;
		}
		return rows;
	}
	
	render () {
		
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
}

export default BrowseTable;