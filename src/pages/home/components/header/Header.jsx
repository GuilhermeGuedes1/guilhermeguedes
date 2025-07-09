import './Header.css';

import { useState } from 'react';
import Aside from '../aside/Aside';
import Overlay from '../aside/Overlay';
import { Link } from 'react-router-dom';

export default function Header() {
	const [toggle, setToggle] = useState(false);

	function handleToggle() {
		setToggle(!toggle);
	}

	return (
		<section className="header">
			<nav>
				<Link to={'/'}>
					<h1>Guilherme Guedes</h1>
				</Link>
				<ion-icon
					name="menu-outline"
					onClick={handleToggle}></ion-icon>

				<div className="nav-links">
					<Link to="/about">Sobre</Link>
				</div>
			</nav>

			<Aside toggle={toggle} />
			<Overlay
				showOverlay={toggle}
				onClick={handleToggle}
			/>
		</section>
	);
}
