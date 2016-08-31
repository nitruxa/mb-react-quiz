import commonStyles from "../css/common.css";
import React from 'react';

var PageCont = React.createClass({

	render: function () {
		return (
			<div className={commonStyles.content}>
				{this.props.children}
			</div>
		);
	}
});

module.exports = PageCont;