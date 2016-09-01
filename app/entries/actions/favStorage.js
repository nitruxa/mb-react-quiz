import { FAV_STORAGE_NAME } from '../constants';

var favStorage = {

	storageAvailable: function () {
		var available = typeof(Storage) !== 'undefined';
		if (!available) {
			console.log('Local storage is not supported!');
		}
		return available;
	},
	
	setFavItem: function (params) {
		if (this.storageAvailable()) {
			var favItems = this.getFavItems();
			
			if (params.favorite) {
				favItems.push(params.id);
			}
			else {
				var inx = favItems.findIndex(function(id) {
					return id === params.id;
				});
				if (inx !== -1) {
					favItems.splice(inx, 1);
				}
			}
			
			localStorage.setItem(FAV_STORAGE_NAME, JSON.stringify(favItems));
		}
	},
	
	getFavItems: function () {
		var favStorage = localStorage.getItem(FAV_STORAGE_NAME);
		var favItems = favStorage ? JSON.parse(favStorage) : [];
		return favItems;
	}
	
};

module.exports = favStorage;