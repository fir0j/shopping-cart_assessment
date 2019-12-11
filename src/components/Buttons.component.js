import React, { Component } from 'react';

export default class Buttons extends Component {
	render() {
		const { handleAddToCart, handleRemoveFromCart } = this.props;

		const AddButton = ({ foodItem }) => {
			return (
				<div>
					<button className="cartButton buttonActive" onClick={handleAddToCart}>
						Add to cart >>
					</button>
				</div>
			);
		};

		const RemoveButton = ({ foodItem }) => {
			return (
				<div>
					<button
						className="cartButton buttonActive"
						onClick={handleRemoveFromCart}
					>{`<< Remove to cart`}</button>
				</div>
			);
		};
		return (
			<div>
				<AddButton />
				<RemoveButton />
			</div>
		);
	}
}
