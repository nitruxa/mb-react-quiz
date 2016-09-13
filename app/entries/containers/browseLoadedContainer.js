import { connect } from 'react-redux';

import BrowseContainer from '../components/browseContainer.js';

import actions from '../actions';

import * as itemListActions from '../actions/itemList';

const mapStateToProps = (state) => {
	return {
		items: state.itemList.items
	}
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		fetchItemList: (params) => {
// 			dispatch(actions.itemList.fetch(params));
// 		}
// 	}
// };

const BrowseLoadedContainer = connect(
	mapStateToProps,
	itemListActions
)(BrowseContainer);

export default BrowseLoadedContainer;