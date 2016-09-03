import fetch from 'isomorphic-fetch';
import { REQUEST_ITEMLIST, RECEIVE_ITEMLIST, START_INDEX } from '../constants';
import favStorage from './favStorage.js';

function requestItemList () {
	return {
		type: REQUEST_ITEMLIST
	}
};

function receiveItemList (items) {
	return {
		type: RECEIVE_ITEMLIST,
		items: items
	}
};

const itemListActions = {
	fetch: function (limit) {
		return function (dispatch) {

		    dispatch(requestItemList());
		    
		    fetch('/browse/data?start=' + START_INDEX + '&limit=' + limit)
		    .then( (resp) => resp.json() )
		    .then( (data) => {
		    	
		    	var favItems = favStorage.getFavItems();
		    	data.items.forEach(function (item) {
		    		var inx = favItems.findIndex(function(id) {
		    			return id === item.id;
		    		});
		            item.favorite = inx !== -1 ? true : false;
		        });
		    	
		    	dispatch(receiveItemList(data.items));
		    });
		}
	}
};

export default itemListActions;