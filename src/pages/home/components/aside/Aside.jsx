import './Aside.css';
import { Link } from 'react-router-dom';

export default function Aside({ toggle }) {
	return (
		<aside className={toggle ? 'show' : ''}>
			<Link to="/">Inicio</Link>
			<Link to={'/about'}>Sobre</Link>
		</aside>
	);
}
