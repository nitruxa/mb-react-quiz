import $ from 'jquery';
import {REQUEST_DATA, RECEIVE_DATA} from '../constants';

function requestData () {
	  return {
	    type: REQUEST_DATA
	  }
	};

function receiveData (items) {
	  return {
	    type: RECEIVE_DATA,
	    items: items
	  }
	};

var itemListActions = {
		
		fetchData: function (limit) {
			return function (dispatch) {

			    dispatch(requestData(limit))
			    
			    return $.ajax({
					url: '/browse/data?start=0&limit=' + limit,
					dataType: 'json',
					success: function (data) {
						dispatch(receiveData(data.items))
					}
				});
			  }
		}

};

const actions = {
	itemList: itemListActions
};

export default actions;