import fetch from 'isomorphic-fetch';
import { REQUEST_ITEMLIST, RECEIVE_ITEMLIST, SET_FAV_ITEMLIST, START_INDEX } from '../constants';
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

function setFavItemList (params) {
	return {
		type: SET_FAV_ITEMLIST,
		id: params.id,
		favorite: params.favorite
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
		    	
		    	dispatch(receiveItemList(data.items)) ;
		    
		    });
		}
	},
	
	setFavorite: function (params) {
		return function (dispatch) {
			
			favStorage.setFavItem(params);
			
			dispatch(setFavItemList(params));
		}
	}

};

export default itemListActions;