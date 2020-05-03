//Note Component first Letter must be Capital

import React, { Component } from 'react';
import CartPage from './components/Cart.page';
import { Homepage } from './components/Homepage.page';

export default class FoodWebsite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 'homepage'
		};
	}

	handleOrderFood = (renderMe) => {
		console.log('renderMe:', renderMe);
		this.setState({
			display: renderMe
		});
	};

	render() {
		const { display } = this.state;
		return (
			<div>
				{display === 'homepage' ? (
					<Homepage handleOrderFood={this.handleOrderFood} />
				) : (
					<CartPage handleOrderFood={this.handleOrderFood} />
				)}
			</div>
		);
	}
}
