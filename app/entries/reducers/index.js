import { combineReducers } from 'redux';
import itemList from './itemList.js';
import singleItem from './singleItem.js';

const reducer = combineReducers({
	itemList,
	singleItem
});

export default reducer;