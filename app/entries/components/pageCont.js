import commonStyles from "../css/common.css";
import React from 'react';

class PageCont extends React.Component {

	render () {
		return (
			<div className={commonStyles.content}>
				{this.props.children}
			</div>
		);
	}
}

export default PageCont;