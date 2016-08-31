import browseStyles from "../css/browse.css";

import React from 'react';
import { connect } from 'react-redux';

import LoadButton from '../components/loadButton.js';
import BrowseTable from '../components/browseTable.js';
import { ADD_ITEMS } from '../constants';
import actions from '../actions';

var BrowseContainer = React.createClass({
	
	componentDidMount: function () {
		if (!this.props.items) {
			this.fetchItemList(ADD_ITEMS);
		}
	},
	
	fetchItemList: function (limit) {
		this.props.dispatch(actions.itemList.fetch(limit));
	},
	
	render: function () {
		var limit = (this.props.items ? this.props.items.length : 0) + ADD_ITEMS;
		
		var browseCont = this.props.items ? (
			<div>
				<div className={browseStyles.browseContainer}>
					<BrowseTable items={this.props.items} />
				</div>
				<LoadButton limit={limit} onLoadClick={this.fetchItemList} />
			</div>
		) : '';
		
		return (
			<div>
				{browseCont}
			</div>
		);
	}
});

const mapStateToProps = (state) => {
	return {
		items: state.itemList.items
	}
};

const BrowseLoadedContainer = connect(
	mapStateToProps
)(BrowseContainer);

export default BrowseLoadedContainer;