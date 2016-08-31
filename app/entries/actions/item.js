import fetch from 'isomorphic-fetch';
import { REQUEST_ITEM, RECEIVE_ITEM } from '../constants';

function requestItem () {
	return {
		type: REQUEST_ITEM
	}
};

function receiveItem (item) {
	return {
		type: RECEIVE_ITEM,
		item: item
	}
};

const ItemActions = {
		
	fetch: function (id) {
		return function (dispatch) {

		    dispatch(requestItem());
		    
		    fetch('/item/' + id + '/data')
		    .then( (resp) => resp.json() )
		    .then( (data) => dispatch(receiveItem(data.item)) );
		  }
	}

};

export default ItemActions;