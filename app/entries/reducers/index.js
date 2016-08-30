import { combineReducers } from 'redux';
import { REQUEST_ITEMLIST, RECEIVE_ITEMLIST } from '../constants';

function data (state = {
	isFetching: false,
	items: []
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
	data
})

export default reducer


