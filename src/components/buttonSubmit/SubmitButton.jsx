import React from 'react';
import './submit.css';

function SubmitButton({ children, type = 'submit' }) {
	return (
		<button
			className="submit-button"
			type={type}>
			{children}
		</button>
	);
}

export default SubmitButton;
