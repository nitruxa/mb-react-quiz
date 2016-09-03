import { SET_FAV_ITEMLIST, SET_FAV_ITEM } from '../constants';
import favStorage from './favStorage.js';

function setFavorite (params) {
	return {
		type: params.itemList ? SET_FAV_ITEMLIST : SET_FAV_ITEM,
		id: params.id,
		favorite: params.favorite,
	}
};

const favoriteActions = {
	setFavorite: function (params) {
		
		return function (dispatch) {
			
			favStorage.setFavItem(params);
			
			dispatch(setFavorite(params));
		}
	}
};

export default favoriteActions;