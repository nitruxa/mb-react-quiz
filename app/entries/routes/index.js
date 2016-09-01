import React from 'react';
import { Route } from 'react-router';

import PageCont from '../components/pageCont.js';
import BrowsePage from '../components/browsePage.js';
import ItemPage from '../components/itemPage.js';

export default function () {
	return (
		<Route component={PageCont}>
			<Route name="browsePage" path="/" component={BrowsePage} />
			<Route name="itemPage" path="item/:id" component={ItemPage} />
		</Route>
	);
};