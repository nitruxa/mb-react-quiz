import browseStyles from "../css/browse.css";

import React from 'react';
import { connect } from 'react-redux';

import LoadButton from '../components/loadButton.js';
import BrowseTable from '../components/browseTable.js';
import { ADD_ITEMS } from '../constants';
import actions from '../actions';

var BrowseContainer = React.createClass({
	
	componentDidMount: function () {
		this.fetchItemList(ADD_ITEMS);
	},
	
	fetchItemList: function (limit) {
		this.props.dispatch(actions.itemList.fetch(limit));
	},
	
	render: function () {
		return (
			<div>
				<div className={browseStyles.browseContainer}>
					<BrowseTable items={this.props.items} />
				</div>
				<LoadButton />
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