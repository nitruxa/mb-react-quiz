import { connect } from 'react-redux';

import ItemContainer from '../components/itemContainer.js';

import actions from '../actions';

const mapStateToProps = (state) => {
	return {
		item: state.singleItem.item
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchItem: (id) => {
			dispatch(actions.singleItem.fetch(id));
		},
		onFavIconClick: (params) => {
			dispatch(actions.singleItem.setFavorite(params));
		},
	}
};

const ItemLoadedContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemContainer);

export default ItemLoadedContainer;