import { useState } from 'react';
import './Projects.css';

import { projects } from '../../../../data/data';

export default function Projects() {
	function ProjectModel({
		name,
		description,
		year,
		tech,
		role,
		image,
		github,
		app,
	}) {
		return (
			<div className="card">
				<img
					src={image}
					alt={name}
				/>
				<div className="project-info">
					<h3 className="tittle">{name}</h3>
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

	return (
		<section
			className="projects"
			id="projects">
			<div className="projects-content">
				<div className="tittle-container">
					<h2>Projetos em destaque</h2>
					<p>
						Aqui estão alguns dos projetos selecionados que demostram minha
						paixão pelo desenvolvimento.
					</p>
				</div>
				<div className="card-container">
					{projects.map((project, index) => (
						<ProjectModel
							key={index}
							name={project.name}
							description={project.description}
							image={project.image}
							year={project.year}
							tech={project.tech}
							role={project.role}
							github={project.github}
							app={project.app}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
