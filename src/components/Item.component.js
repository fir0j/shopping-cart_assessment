import React, { Component } from 'react';

export default class Item extends Component {
	render() {
		const { foodItem, handleClickToSelect, menuItemSelected, isSelected } = this.props;

		const selected = isSelected && foodItem.id === menuItemSelected.id ? 'card isSelected' : 'card';
		return (
			<div>
				<div className={selected} onClick={() => handleClickToSelect(foodItem)}>
					<div
						className="card-photo"
						style={{
							backgroundImage: `url(${foodItem.photoUrl})`
						}}
					/>
					{/* <img src="https://fakeimg.pl/250x100/ff0000/" alt="pizza" /> */}
					{/* <img src={require('../images/pizza.jpeg')} alt="pizza" /> */}
					<h1 className="name">{foodItem.name}</h1>
					<h2 className="price">${foodItem.price}</h2>
				</div>
			</div>
		);
	}
}
