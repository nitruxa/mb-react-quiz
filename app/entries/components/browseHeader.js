import browseStyles from '../css/browse.css';

import React from 'react';

class BrowseHeader extends React.Component {
	
	render () {
		
		return (
			<div className={browseStyles.browseHeader}>
				Browse Page
			</div>
		);
	}
}

export default BrowseHeader;