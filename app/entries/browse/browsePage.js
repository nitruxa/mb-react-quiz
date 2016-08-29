import browseStyles from "./browse.css";

import $ from 'jquery';
import React from 'react';

import Header from '../shared/header.js';

var BrowseItem = React.createClass({

	render: function () {
		return (
			<div>
				<img src={this.props.item.image} />
			</div>
		);
	}
});

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
	
	loadData: function () {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: function (data) {
				this.setState({data: data});
				
				console.log(this.state.data);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},

	getInitialState: function() {
		return {data: {items: []}};
	},
	
	componentDidMount: function () {
		this.loadData();
	},

	render: function () {
		return (
			<div className={browseStyles.browseContainer}>
				<BrowseTable data={this.state.data} />
			</div>
		);
	}
});

var LoadButton = React.createClass({

	render: function () {
		return (
			<div className={browseStyles.footer}>
				<input type="button" className={browseStyles.loadButton} value="LOAD MORE" />
			</div>
		);
	}
});


var BrowsePage = React.createClass({

	render: function () {
		return (
			<div>
				<Header title="Browse page" />
				<BrowseContainer url={'/browse/data?start=0&limit=9'} />
				<LoadButton />
			</div>
		);
	}
});

module.exports = BrowsePage;