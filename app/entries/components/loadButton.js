import React from 'react'

import browseStyles from "../css/browse.css";

var LoadButton = React.createClass({

	render: function () {
		return (
			<div className={browseStyles.footer}>
				<input type="button" className={browseStyles.loadButton} value="LOAD MORE" />
			</div>
		);
	}
});

module.exports = LoadButton;