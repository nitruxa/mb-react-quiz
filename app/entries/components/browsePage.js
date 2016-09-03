import React from 'react';

import BrowseHeader from './browseHeader.js';
import BrowseLoadedContainer from '../containers/browseLoadedContainer.js';

class BrowsePage extends React.Component {

	render () {
		return (
			<div>
				<BrowseHeader />
				<BrowseLoadedContainer />
			</div>
		);
	}
}

export default BrowsePage;