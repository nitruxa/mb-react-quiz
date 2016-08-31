import itemStyles from '../css/item.css';

import React from 'react';
import { Link } from 'react-router';

var ItemHeader = React.createClass({
	
	render: function () {
		
		var homeTxt = '< Home';
		var link = (
			<Link to="/">
				<div className={itemStyles.leftHeaderLink}>{homeTxt}</div>
			</Link>
		)
		
		var logo = this.props.item ? (
			<img src={'https://www.1stdibs.com' + this.props.item.seller.logo} />
		): '';
		
		return (
			<div className={itemStyles.itemHeader}>
				{link}
				{logo}
			</div>
		);
	}
});

module.exports = ItemHeader;