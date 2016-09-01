import fetch from 'isomorphic-fetch';
import { REQUEST_ITEMLIST, RECEIVE_ITEMLIST, TOGGLE_FAV_ITEMLIST, START_INDEX } from '../constants';

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

function toggleFavItemList (id) {
	return {
		type: TOGGLE_FAV_ITEMLIST,
		id: id
	}
};

const itemListActions = {
	fetch: function (limit) {
		return function (dispatch) {

		    dispatch(requestItemList());
		    
		    fetch('/browse/data?start=' + START_INDEX + '&limit=' + limit)
		    .then( (resp) => resp.json() )
		    .then( (data) => {
		    	/*
		    	data.items.forEach(function (item) {
		            item.favorite = true;
		        });
		    	*/
		    	dispatch(receiveItemList(data.items)) ;
		    
		    });
		}
	},
	
	toggleFav: function (id) {
		return function (dispatch) {
			
			
			//write to storage
			
			dispatch(toggleFavItemList(id));
		}
	}

};

export default itemListActions;