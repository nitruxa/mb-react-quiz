import { REQUEST_ITEM, RECEIVE_ITEM, SET_FAV_ITEM } from '../constants';

function setFavInNewState (state, action) {	
	var item = JSON.parse(JSON.stringify(state.item));
	
	item.favorite = action.favorite;
	
	return Object.assign({}, state, {
		item: item
	});
};

export default function item (state = {
	isFetching: false,
	item: null
}, action) {
	switch (action.type) {
		case REQUEST_ITEM:
			return Object.assign({}, state, {
				isFetching: true,
				item: null
			})
		case RECEIVE_ITEM:
			return Object.assign({}, state, {
				isFetching: false,
				item: action.item
			})
		case SET_FAV_ITEM:
			return setFavInNewState(state, action)
		default:
			return state
	}
};