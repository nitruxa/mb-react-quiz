import { combineReducers } from 'redux';
import itemList from './itemList.js';
import item from './item.js';

const reducer = combineReducers({
	itemList,
	item
});

export default reducer;