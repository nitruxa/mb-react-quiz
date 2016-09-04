import { REQUEST_ITEMLIST, RECEIVE_ITEMLIST, SET_FAV_ITEMLIST } from '../constants';

function cloneItems (items) {
	return JSON.parse(JSON.stringify(items));
};

function setFavInNewState (state, action) {	
	var items = cloneItems(state.items);
	
	var inx = items.findIndex(function(item) {
		return item.id === action.id;
	});
	
	items[inx].favorite = action.favorite;
	
	return Object.assign({}, state, {
		items: items
	});
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
				items: action.concat ? cloneItems(state.items).concat(action.items) : action.items
			})
		case SET_FAV_ITEMLIST:
			return setFavInNewState(state, action)
		default:
			return state
	}
};