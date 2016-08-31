import fetch from 'isomorphic-fetch';
import { REQUEST_ITEMLIST, RECEIVE_ITEMLIST, START_INDEX } from '../constants';

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

const ItemListActions = {
		
	fetch: function (limit) {
		return function (dispatch) {

		    dispatch(requestItemList());
		    
		    fetch('/browse/data?start=' + START_INDEX + '&limit=' + limit)
		    .then( (resp) => resp.json() )
		    .then( (data) => dispatch(receiveItemList(data.items)) );
		  }
	}

};

export default ItemListActions;