import { connect } from 'react-redux';

import BrowseContainer from '../components/browseContainer.js';

import actions from '../actions';

const mapStateToProps = (state) => {
	return {
		items: state.itemList.items
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchItemList: (limit) => {
			dispatch(actions.itemList.fetch(limit));
		},
		onFavIconClick: (params) => {
			dispatch(actions.itemList.setFavorite(params));
		},
	}
};

const BrowseLoadedContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(BrowseContainer);

export default BrowseLoadedContainer;