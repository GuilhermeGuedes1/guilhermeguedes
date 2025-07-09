import React from 'react';
import './button.css';

function Button({ children, onClick, type = 'button', className = '', icon }) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`contact-button ${className}`}>
			{children}
			{icon}
		</button>
	);
}

export default Button;
