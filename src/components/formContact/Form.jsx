import React from 'react';

import SubmitButton from '../buttonSubmit/SubmitButton';

function Form({ onChange, onSubmit, value }) {
	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="name">Nome</label>
			<input
				type="text"
				id="name"
				value={value}
				onChange={onChange}
			/>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				id="email"
				value={value}
				onChange={onChange}
			/>
			<label htmlFor="subject">Assunto</label>
			<input
				type="text"
				id="subject"
				value={value}
				onChange={onChange}
			/>
			<label htmlFor="message">Mensagem</label>
			<textarea
				name="Text-area"
				id="message"
				value={value}
				onChange={onChange}></textarea>
			<SubmitButton children={'Enviar'} />
		</form>
	);
}
