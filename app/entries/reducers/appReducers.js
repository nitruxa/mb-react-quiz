import { combineReducers } from 'redux';
import {
  REQUEST_DATA, RECEIVE_DATA
} from '../actions/appActions.js';

function data (state = {
	isFetching: false,
	items: []
}, action) {
	switch (action.type) {
		case REQUEST_DATA:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_DATA:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.items
			})
		default:
			return state
	}
}

const app = combineReducers({
	data
})

export default app


