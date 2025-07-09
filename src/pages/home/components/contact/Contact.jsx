import './Contact.css';
import { useState } from 'react';

import SubmitButton from '../../../../components/buttonSubmit/SubmitButton';
import LinkedinIcon from '../../../../components/SocialIcons/LinkedinIcon';
import Github from '../../../../components/SocialIcons/Github';
import Instagram from '../../../../components/SocialIcons/Instagram';
import Twitter from '../../../../components/SocialIcons/Twitter';

import { Form } from 'react-router-dom';

export default function Contact() {
	const [name, setName] = useState('');

	function handleName(e) {
		setName(e.target.value);
		console.log(e.target.value);
	}
	function handleSubmit() {
		console.log('ok');
	}

	return (
		<section
			className="contact"
			id="contact">
			<div className="contact-content">
				<h2>Vamos conectar!</h2>
				<h3>
					De um Alô em <strong>gguedesprofissional@gmail.com</strong>
				</h3>
				<div className="links">
					<LinkedinIcon />
					<Github />
					<Instagram />
					<Twitter />
				</div>
				<form>
					<label htmlFor="name">Nome</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => handleName(e)}
					/>
					<label htmlFor="email">Email</label>
					<input type="email" />
					<label htmlFor="subject">Assunto</label>
					<input type="text" />
					<label htmlFor="message">Mensagem</label>
					<textarea
						name="Text-area"
						id="message"></textarea>
					<SubmitButton children={'Enviar'} />
				</form>
			</div>
		</section>
	);
}
