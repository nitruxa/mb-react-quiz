import { REQUEST_ITEMLIST, RECEIVE_ITEMLIST, TOGGLE_FAV_ITEMLIST } from '../constants';


function toggleFavInStateList (state, action) {
	return Object.assign({}, state, {});
};

export default function itemList (state = {
	isFetching: false,
	items: null
}, action) {
	switch (action.type) {
		case REQUEST_ITEMLIST:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_ITEMLIST:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.items
			})
		case TOGGLE_FAV_ITEMLIST:
			return toggleFavInStateList(state, action)
		default:
			return state
	}
};