import browseStyles from "../css/browse.css";

import React from 'react';

import BrowseItemCell from './browseItemCell.js';

class BrowseTableRow extends React.Component {
	
	render () {
		
		return (
			<tr>
				{this.props.items.map(function(item) {
						return (
							<BrowseItemCell key={item.id + '|browseItemCell'} item={item} />
						);
					}
				)}
			</tr>
		);
	}
}

export default BrowseTableRow;