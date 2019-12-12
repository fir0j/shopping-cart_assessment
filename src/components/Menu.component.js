import React, { Component } from 'react';
import { Cart } from './Cart.component';
import Buttons from './Buttons.component';
import Item from './Item.component';

export default class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuItemSelected: '',
			cartItemSelected: '',
			isSelectedFromMenu: false,
			isSelectedFromCart: false,
			cartItems: []
		};
	}

	handleClickToSelect = (selected) => {
		this.setState((state) => ({
			menuItemSelected: selected,
			isSelectedFromMenu: true
		}));
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

	handleRemoveFromCart = () => {
		if (!this.state.cartItemSelected) {
			alert('Please Select an Item from the cart first!');
		} else {
			this.setState((state) => ({
				cartItems: state.cartItems.filter((cartItem) => cartItem.id !== this.state.cartItemSelected.id)
			}));
		}
	};

	getCartItemSelected = (item, isSelectedFromCart) => {
		this.setState({
			cartItemSelected: item,
			isSelectedFromCart: isSelectedFromCart
		});
	};

	TotalPrice = () => {
		const { cartItems } = this.state;
		const total = cartItems.reduce((acc, item) => acc + item.price, 0);
		this.setState({
			cartTotal: total
		});
	};

	render() {
		const { MenuItems } = this.props;
		const { menuItemSelected, cartItems, isSelectedFromMenu, cartTotal, isSelectedFromCart } = this.state;

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
				<div className="cart">
					<div style={{ textAlign: 'center', fontSize: '25px' }}>
						<p>Available Options</p>
					</div>
					<hr />
					{MenuItems.map((MenuItem) => {
						return (
							<Item
								key={MenuItem.id}
								foodItem={MenuItem}
								handleClickToSelect={this.handleClickToSelect}
								menuItemSelected={menuItemSelected}
								isSelected={isSelectedFromMenu}
							/>
						);
					})}
				</div>

				<div className="buttons">
					<Buttons
						handleAddToCart={this.handleAddToCart}
						handleRemoveFromCart={this.handleRemoveFromCart}
						isSelectedFromMenu={isSelectedFromMenu}
						isSelectedFromCart={isSelectedFromCart}
					/>
				</div>

				<div>
					<Cart
						cartItems={cartItems}
						handleClickToSelect={this.handleClickToSelect}
						getCartItemSelected={this.getCartItemSelected}
						cartTotal={cartTotal}
					/>
				</div>
			</div>
		) : (
			<cartEmpty />
		);
	}
}
