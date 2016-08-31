import React from 'react';

var Price = React.createClass({

	render: function () {
		
		var price = this.props.price ? this.props.price.amounts.USD : 'Price Upon Request';
		
		return (
			<div>
				{price}
			</div>
		);
	}
});

module.exports = Price;