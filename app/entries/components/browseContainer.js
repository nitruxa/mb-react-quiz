import browseStyles from "../css/browse.css";

import React from 'react';

import LoadButton from './loadButton.js';
import BrowseTable from './browseTable.js';
import { ADD_ITEMS } from '../constants';

var BrowseContainer = React.createClass({
	
	componentDidMount: function () {
		var limit = this.props.items ? this.props.items.length : ADD_ITEMS;
		
		this.props.fetchItemList(limit);
	},
	
	render: function () {
		var limit = (this.props.items ? this.props.items.length : 0) + ADD_ITEMS;
		
		var browseCont = this.props.items ? (
			<div>
				<div className={browseStyles.browseContainer}>
					<BrowseTable items={this.props.items} onFavIconClick={this.props.onFavIconClick} />
				</div>
				<LoadButton limit={limit} onLoadClick={() => this.props.fetchItemList(limit)} />
			</div>
		) : '';
		
		return (
			<div>
				{browseCont}
			</div>
		);
	}
});

module.exports = BrowseContainer;