import React from 'react'

import browseStyles from "../css/browse.css";

class LoadButton extends React.Component {
	
	render () {
		return (
			<div className={browseStyles.footer}>
				<input type="button" className={browseStyles.loadButton} value="LOAD MORE" onClick={this.props.onLoadClick} />
			</div>
		);
	}
}

export default LoadButton;