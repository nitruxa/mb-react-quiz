import browseStyles from "./browse.css";

import $ from 'jquery';
import React from 'react';

import Header from '../shared/header.js';

var BrowseItem = React.createClass({

	render: function () {
		
		return (
			<div>
				{this.props.item.title}
			</div>
		);
	}
});

var BrowseTable = React.createClass({

	render: function () {
		{/*
		var rows = this.props.data.items.map(function(item) {
				return (
					<tr>
						<td>
							{item.title}
						</td>
					</tr>
				)
		});
		*/}
		
		var rows = [];
		
		this.props.data.items.forEach(function(item) {
			
			rows.push(
				<tr key={item.id + "|tr"}>
					<td key={item.id + "|td"}>
						<BrowseItem key={item.id} item={item} />
					</td>
				</tr>
			);
				
		});
		
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