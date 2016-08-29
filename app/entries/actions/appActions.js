import $ from 'jquery';

export const REQUEST_DATA = 'REQUEST_DATA'
function requestData(limit) {
  return {
    type: REQUEST_DATA,
    limit
  }
}

export const RECEIVE_DATA = 'RECEIVE_DATA'
function receiveData(items) {
  return {
    type: RECEIVE_DATA,
    items: items
  }
}

export function fetchData(limit) {
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