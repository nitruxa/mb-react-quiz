import itemStyles from "../css/item.css";

import React from 'react';
import { connect } from 'react-redux';

import ItemHeader from '../components/itemHeader.js';
import ItemTable from '../components/itemTable.js';
import actions from '../actions';

var ItemContainer = React.createClass({
	
	componentDidMount: function () {
		this.fetchItem(this.props.id);
	},
	
	fetchItem: function (id) {
		this.props.dispatch(actions.singleItem.fetch(id));
	},
	
	render: function () {
		
		return (
			<div>
				<ItemHeader item={this.props.item} />
				<div className={itemStyles.itemContainer}>
					<ItemTable item={this.props.item} />
				</div>
			</div>
		);
	}
});

const mapStateToProps = (state) => {
	return {
		item: state.singleItem.item
	}
};

const ItemLoadedContainer = connect(
	mapStateToProps
)(ItemContainer);

export default ItemLoadedContainer;