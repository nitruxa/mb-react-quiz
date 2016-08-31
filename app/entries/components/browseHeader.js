import browseStyles from '../css/browse.css';

import React from 'react';

var BrowseHeader = React.createClass({
	
	render: function () {
		/*
		var link = null;
		
		if (this.props.link) {
			link = (
				<div style={{float: "left"}}><a className={sharedStyles.leftHeaderLink} href={this.props.link.url}>{this.props.link.text}</a></div>	
			)
		}
		*/
		return (
			<div className={browseStyles.browseHeader}>
				{/*{link}*/}
				Browse Page
			</div>
		);
	}
});

module.exports = BrowseHeader;