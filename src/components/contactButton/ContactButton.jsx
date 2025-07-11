import React from 'react';
import './button.css';

function Button({ children, className = '', icon }) {
	return (
		<a href="#contact">
			<button className={`contact-button ${className}`}>
				{children}
				{icon}
			</button>
		</a>
	);
}

export default Button;
