import browseStyles from "../css/browse.css";

import React from 'react';

import BrowseItem from './browseItem.js';
import LoadButton from './loadButton.js';
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
				<div className={browseStyles.browseOuterContainer}>
					<div className={browseStyles.browseContainer}>
						{this.props.items.map(function(item) {
							return <BrowseItem key={item.id + '|browseItem'} item={item} />;
						})}
					</div>
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