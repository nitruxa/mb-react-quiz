import browseStyles from "../css/browse.css";

import React from 'react';

import BrowseItem from './browseItem.js';
import LoadButton from './loadButton.js';
import { START_INDEX, ADD_ITEMS } from '../constants';

class BrowseContainer extends React.Component {

	constructor(props) {
		super(props);

		this.onLoadMore = this.onLoadMore.bind(this);
	}

	componentDidMount () {
		var limit = this.props.items ? this.props.items.length : ADD_ITEMS;

		this.props.fetchItems({
			start: START_INDEX,
			limit: limit,
			concat: false
		});
	}

	onLoadMore() {
		this.props.fetchItemList({
			start: this.props.items ? this.props.items.length : START_INDEX,
			limit: ADD_ITEMS,
			concat: true
		});
	}

	isFavorited(itemId) {
		const {items, favorites} = this.props;

		return true;
	}

	render () {

		var browseCont = this.props.items ? (
			<div>
				<div className={browseStyles.browseOuterContainer}>
					<div className={browseStyles.browseContainer}>
						{this.props.items.map(item => {
							const isFavorited = this.isFavorited(item.id);
							return <BrowseItem key={item.id + '|browseItem'} {...item} isFavorited={isFavorited} />;
						})}
					</div>
				</div>
				<LoadButton onClick={this.onLoadMore} />
			</div>
		) : '';

		return (
			<div>
				{browseCont}
			</div>
		);
	}
}

BrowseContainer.defaultProps = {
	startIndex: 0,
	limit: 9
};

export default BrowseContainer;