import browseStyles from "../css/browse.css";

import React from 'react';

import LoadButton from './loadButton.js';
import BrowseTable from './browseTable.js';
import { START_INDEX, ADD_ITEMS } from '../constants';

class BrowseContainer extends React.Component {
	
	componentDidMount () {
		var limit = this.props.items ? this.props.items.length : ADD_ITEMS;
		
		this.props.fetchItemList({
			start: START_INDEX,
			limit: limit,
			concat: false
		});
	}
	
	render () {
		
		var browseCont = this.props.items ? (
			<div>
				<div className={browseStyles.browseContainer}>
					<BrowseTable items={this.props.items} />
				</div>
				<LoadButton onLoadClick={() => this.props.fetchItemList({
					start: this.props.items ? this.props.items.length : START_INDEX,
					limit: ADD_ITEMS,
					concat: true
				})} />
			</div>
		) : '';
		
		return (
			<div>
				{browseCont}
			</div>
		);
	}
}

export default BrowseContainer;