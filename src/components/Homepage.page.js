import React from 'react';
import './Homepage.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCamera, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Homepage = (props) => {
	const Navbar = () => {
		return (
			<nav>
				<ul>
					<li>
						FOOD.<span>LOGO</span>
					</li>
					<li>ABOUT</li>
					<li>OUR FOOD</li>
					<li>PLANS</li>
					<li>CONTACT US</li>
				</ul>
			</nav>
		);
	};

	const Content = () => {
		return (
			<div className="content">
				<h2>Have no time</h2>
				<br />
				<h2>
					to prepare <span>food</span>?
				</h2>
				<br />
				<p>Choose one of our plans, enter delivery time</p>
				<p>and enjoy delicious food without leaving your home!</p>
				<input type="button" onClick={() => props.handleOrderFood('cartPage')} value="Order food" />
				<ul className="icons">
					<li>
						<FontAwesomeIcon icon={faTwitterSquare} />
					</li>
					<li>
						<FontAwesomeIcon icon={faFacebookSquare} />
					</li>
					<li>
						<FontAwesomeIcon icon={faInstagram} />
					</li>
				</ul>
			</div>
		);
	};

	return (
		<div className="landingPage">
			<Navbar />

			<div className="backgroundContainer">
				<Content />
				<div
					style={{ backgroundImage: `url('https://source.unsplash.com/MqT0asuoIcU')` }}
					className="bgImage"
				/>
			</div>
		</div>
	);
};
