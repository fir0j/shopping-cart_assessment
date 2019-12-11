import React, { Component } from 'react';
import Menu from './components/Menu.component';
import './style.css';

class FoodWebsite extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			foodItems: [
				{
					photoUrl: 'https://fakeimg.pl/250x100/ff0000/',
					name: 'pizza',
					price: '5.99',
					id: 1
				},
				{
					photoUrl: 'https://fakeimg.pl/250x100/ff0000/',
					name: 'burger',
					price: '2.99',
					id: 2
				},
				{
					photoUrl: 'https://fakeimg.pl/250x100/ff0000/',
					name: 'Chicken Pasta',
					price: '2.99',
					id: 3
				},
				{
					photoUrl: 'https://fakeimg.pl/250x100/ff0000/',
					name: 'Grilled Sandwich',
					price: '2.99',
					id: 4
				}
			],
			activateButton: false
		};
	}

	render() {
		const { foodItems } = this.state;

		return (
			<div>
				<div>
					<Menu MenuItems={foodItems} />
				</div>
			</div>
		);
	}
}

export default FoodWebsite;
