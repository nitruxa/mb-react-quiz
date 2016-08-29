import React from 'react';

var BrowseItem = React.createClass({

	render: function () {
		return (
			<div>
				<img src={this.props.item.image} />
			</div>
		);
	}
});

module.exports = BrowseItem;