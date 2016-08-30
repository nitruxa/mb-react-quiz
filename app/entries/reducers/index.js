import { combineReducers } from 'redux';
import { REQUEST_ITEMLIST, RECEIVE_ITEMLIST } from '../constants';

function itemList (state = {
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
		default:
			return state
	}
}

const reducer = combineReducers({
	itemList
})

export default reducer


