import fetch from 'isomorphic-fetch';
// import { REQUEST_ITEMLIST, RECEIVE_ITEMLIST } from '../constants';
import favStorage from './favStorage.js';

export const REQUEST_ITEMLIST = 'REQUEST_ITEMLIST';
export const RECEIVE_ITEMLIST = 'RECEIVE_ITEMLIST';

function requestItemList () {
	return {
		type: REQUEST_ITEMLIST
	}
};

function receiveItemList (params) {
	return {
		type: RECEIVE_ITEMLIST,
		items: params.items,
		concat: params.concat
	}
};

export const fetchItems = function (params) {
		return dispatch => {

		    dispatch(requestItemList());

		    fetch('/browse/data?start=' + params.start + '&limit=' + params.limit)
		    .then( (resp) => resp.json() )
		    .then( (data) => {

		    	var favItems = favStorage.getFavItems();
		    	data.items.forEach(function (item) {
		    		var inx = favItems.findIndex(function(id) {
		    			return id === item.id;
		    		});
		            item.favorite = inx !== -1 ? true : false;
		        });

		    	dispatch(receiveItemList({
		    		items: data.items,
		    		concat: params.concat
		    	}));
		    });
		}
	}
};

export const kazkas = function() {

}
