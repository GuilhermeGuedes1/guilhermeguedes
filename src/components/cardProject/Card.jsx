import React from 'react';
import './card.css';

function Card({ name, description, year, tech, role, image, github, app }) {
	return (
		<div className="card">
			<img
				src={image}
				alt={name}
			/>
			<div className="project-info">
				<a
					href={app}
					target="_blank">
					<h3 className="tittle">{name}</h3>
				</a>
				<p className="description">{description}</p>
				<h4 className="tittle-project-info">Project Info</h4>
				<div className="role-container">
					<div className="year">Year</div>
					<div className="year-date">{year}</div>
				</div>
				<div className="role-container">
					<div className="role">Tech</div>
					<div className="role-name">{tech}</div>
				</div>
				<div className="role-container">
					<div className="role">Role</div>
					<div className="role-name">{role}</div>
				</div>
				<div className="project-links">
					<div className="links">
						<a href={github}>GITHUB</a>
						<a href={app}>ACESSE O APP</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
