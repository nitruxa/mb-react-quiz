import { connect } from 'react-redux';

import FavIcon from '../components/favIcon.js';

import actions from '../actions';

const mapDispatchToProps = (dispatch) => {
	return {
		onFavIconClick: (params) => {
			dispatch(actions.favorite.setFavorite(params));
		}
	}
};

const FavIconContainer = connect(
	null,
	mapDispatchToProps
)(FavIcon);

export default FavIconContainer;