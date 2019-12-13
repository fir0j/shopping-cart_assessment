//Note Component first Letter must be Capital

import React, { Component } from 'react';
// import CartPage from './components/Cart.page';
import { Homepage } from './components/Homepage.page';

export default class FoodWebsite extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="website">
				<Homepage />
				{/* <CartPage /> */}
			</div>
		);
	}
}
