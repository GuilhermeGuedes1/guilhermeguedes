import './Contact.css';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import SubmitButton from '../../../../components/buttonSubmit/SubmitButton';
import LinkedinIcon from '../../../../components/socialIcons/LinkedinIcon';
import GithubIcon from '../../../../components/socialIcons/Github';
import Instagram from '../../../../components/SocialIcons/Instagram';
import Twitter from '../../../../components/SocialIcons/Twitter';

export default function Contact() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [state, handleSubmit] = useForm('mdkzqdeo');

	function handleForm(e) {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	}

	if (state.succeeded) {
		return (
			<section
				className="contact"
				id="contact">
				<div className="contact-content">
					<h2>Mensagem enviada com sucesso!</h2>
				</div>
			</section>
		);
	}

	return (
		<section
			className="contact"
			id="contact">
			<div className="contact-content">
				<div className="contact-container">
					<h2>Vamos conectar!</h2>
					<h3>
						Dê um alô em <strong>gguedesprofissional@gmail.com</strong>
					</h3>
					<div className="links">
						<LinkedinIcon />
						<GithubIcon />
						<Instagram />
						<Twitter />
					</div>
				</div>

				<div className="form-container">
					<form onSubmit={handleSubmit}>
						<label htmlFor="name">Nome</label>
						<input
							type="text"
							id="name"
							name="name"
							onChange={handleForm}
							value={formState.name}
							required
						/>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							onChange={handleForm}
							value={formState.email}
							required
						/>
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
						<label htmlFor="subject">Assunto</label>
						<input
							type="text"
							id="subject"
							name="subject"
							onChange={handleForm}
							value={formState.subject}
							required
						/>
						<label htmlFor="message">Mensagem</label>
						<textarea
							id="message"
							name="message"
							onChange={handleForm}
							value={formState.message}
							required
						/>
						<ValidationError
							prefix="Mensagem"
							field="message"
							errors={state.errors}
						/>
						<SubmitButton
							type="submit"
							disabled={state.submitting}>
							Enviar
						</SubmitButton>
					</form>
				</div>
			</div>
		</section>
	);
}
