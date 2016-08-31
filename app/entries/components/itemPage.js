import React from 'react';

import ItemLoadedContainer from '../containers/itemLoadedContainer.js';

var ItemPage = React.createClass({
	
	render: function () {
	
		return (
			<div>
				<ItemLoadedContainer id={this.props.params.id} />
			</div>
		);
	}
});

module.exports = ItemPage;