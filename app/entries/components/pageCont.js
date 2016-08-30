import sharedStyles from "../css/shared.css";
import React from 'react';

var PageCont = React.createClass({

	render: function () {
		return (
			<div className={sharedStyles.content}>
				{this.props.children}
			</div>
		);
	}
});

module.exports = PageCont;