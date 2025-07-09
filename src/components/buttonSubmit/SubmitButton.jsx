import React from 'react';
import './submit.css';

function SubmitButton({ children, type = 'button' }) {
	return (
		<div
			className="submit-button"
			type={type}>
			{children}
		</div>
	);
}

export default SubmitButton;
