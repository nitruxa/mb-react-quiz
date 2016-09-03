import React from 'react';

import ItemLoadedContainer from '../containers/itemLoadedContainer.js';

class ItemPage extends React.Component {
	
	render () {
	
		return (
			<div>
				<ItemLoadedContainer id={this.props.params.id} />
			</div>
		);
	}
}

export default ItemPage;