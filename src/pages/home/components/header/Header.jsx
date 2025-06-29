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
				<h1>Guilherme Guedes</h1>
				<ion-icon
					name="menu-outline"
					onClick={handleToggle}></ion-icon>

				<div className="nav-links">
					<a href="#projects">Projetos</a>

					<Link to="/about">Sobre</Link>
					<a href="#contact">Contato</a>
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
