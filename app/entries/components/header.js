import sharedStyles from '../css/shared.css';

import React from 'react';

var Header = React.createClass({
	
	render: function () {
		var link = null;
		
		if (this.props.link) {
			link = (
				<div style={{float: "left"}}><a className={sharedStyles.leftHeaderLink} href={this.props.link.url}>{this.props.link.text}</a></div>	
			)
		}
	
		return (
			<div className={sharedStyles.header}>
				{link}
				{this.props.title}
			</div>
		);
	}
});

module.exports = Header;