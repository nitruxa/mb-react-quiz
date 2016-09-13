import React, {Component, PropTypes} from 'react';

import browseStyles from "../css/browse.css";

class LoadButton extends Component {

	render() {
        return (
			<div className={browseStyles.footer}>
				<input type="button" className={browseStyles.loadButton} value="LOAD MORE" onClick={this.props.onClick} />
			</div>
		);
	}
}

LoadButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default LoadButton;
