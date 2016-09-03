import React from 'react';

class Price extends React.Component {

	render () {
		
		var price = this.props.price ? this.props.price.amounts.USD : 'Price Upon Request';
		
		return (
			<div>
				{price}
			</div>
		);
	}
}

export default Price;