import './Aside.css';
import { Link } from 'react-router-dom';

export default function Aside({ toggle }) {
	return (
		<aside className={toggle ? 'show' : ''}>
			<Link to={'/about'}>
				Sobre
			</Link>
			<a href="#">Projetos</a>
			<a href="#">Contato</a>
		</aside>
	);
}
