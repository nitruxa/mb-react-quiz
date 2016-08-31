import React from 'react'

import browseStyles from "../css/browse.css";

var LoadButton = React.createClass({
	
	handleLoadClick: function () {
		this.props.onLoadClick(this.props.limit);
	},

	render: function () {
		return (
			<div className={browseStyles.footer}>
				<input type="button" className={browseStyles.loadButton} value="LOAD MORE" onClick={this.handleLoadClick} />
			</div>
		);
	}
});

module.exports = LoadButton;