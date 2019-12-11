import React, { Component } from 'react';
import { Cart } from './Cart.component';
import Buttons from './Buttons.component';
import Item from './Item.component';

export default class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuItemSelected: '',
			isSelected: false,
			cartItems: []
		};
	}

	handleClickToSelect = (selected) => {
		this.setState((state) => ({
			menuItemSelected: selected,
			isSelected: true
		}));
	};

	toggleSelected = () => {
		this.setState({
			isSelected: !this.state.isSelected
		});
	};

	handleAddToCart = () => {
		if (!this.state.menuItemSelected) {
			alert('Please Select an Item from the Menu first!');
		} else {
			this.setState((state) => ({
				cartItems: [ ...state.cartItems, state.menuItemSelected ]
			}));
		}
	};

	handleRemoveFromCart = (cartItemSelected) => {
		if (!this.state.menuItemSelected) {
			alert('Please Select an Item from the cart first!');
		} else {
			this.setState((state) => ({
				cartItems: state.cartItems.filter((cartItem) => cartItem.id !== cartItemSelected.id)
			}));
		}
	};

	render() {
		const { MenuItems } = this.props;
		const { menuItemSelected, cartItems, isSelected, cartItemSelected } = this.state;

		const cartEmpty = () => {
			return (
				<div className="menuEmpty">
					<h2>Menu is empty</h2>
					<h5>Menu is coming Soon!</h5>
				</div>
			);
		};

		return MenuItems.length > 0 ? (
			<div className="homepage">
				<div>
					{MenuItems.map((MenuItem) => {
						return (
							<Item
								key={MenuItem.id}
								foodItem={MenuItem}
								handleClickToSelect={this.handleClickToSelect}
								menuItemSelected={menuItemSelected}
								isSelected={isSelected}
							/>
						);
					})}
				</div>

				<div className="buttons">
					<Buttons handleAddToCart={this.handleAddToCart} handleRemoveFromCart={this.handleRemoveFromCart} />
				</div>

				<div>
					<Cart
						cartItems={cartItems}
						handleClickToSelect={this.handleClickToSelect}
						menuItemSelected={menuItemSelected}
						isSelected={isSelected}
						handleRemoveFromCart={this.handleRemoveFromCart}
					/>
				</div>
			</div>
		) : (
			<cartEmpty />
		);
	}
}
