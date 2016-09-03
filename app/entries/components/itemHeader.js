import itemStyles from '../css/item.css';

import React from 'react';
import { Link } from 'react-router';

class ItemHeader extends React.Component {
	
	shouldComponentUpdate () {
		return false;
	}
	
	render () {
		
		var link = (
			<div className={itemStyles.leftHeaderLink}>
				<Link to="/" className={itemStyles.linkText}>{'< Home'}</Link>
			</div>
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
}

export default ItemHeader;