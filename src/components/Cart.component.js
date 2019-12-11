import React, { Component } from 'react';
import Item from './Item.component';

export class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cartItemSelected: '',
			isSelected: ''
		};
	}

	handleClickToSelect = (cartItem) => {
		this.setState((state) => ({
			cartItemSelected: cartItem,
			isSelected: true
		}));
	};

	render() {
		const { cartItems } = this.props;
		const { cartItemSelected, isSelected } = this.state;

		return cartItems.length > 0 ? (
			<div className="">
				{cartItems.map((cartItem) => {
					return (
						<div onClick={() => this.props.getCartItemSelected(this.state.cartItemSelected)}>
							<Item
								key={cartItem.id}
								foodItem={cartItem}
								handleClickToSelect={this.handleClickToSelect}
								menuItemSelected={cartItemSelected}
								isSelected={isSelected}
							/>
						</div>
					);
				})}
			</div>
		) : (
			<div>
				<div className="cartEmpty">
					<h2>Your cart is empty</h2>
					<h5>Select an item and click "Add to cart"</h5>
				</div>
			</div>
		);
	}
}
