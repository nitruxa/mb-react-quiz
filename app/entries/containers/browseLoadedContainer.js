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
		fetchItemList: (params) => {
			dispatch(actions.itemList.fetch(params));
		}
	}
};

const BrowseLoadedContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(BrowseContainer);

export default BrowseLoadedContainer;