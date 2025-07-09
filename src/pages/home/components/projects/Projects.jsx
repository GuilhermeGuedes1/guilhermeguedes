import { useState } from 'react';
import './Projects.css';

import Card from '../../../../components/cardProject/Card';
import { projects } from '../../../../data/data';

export default function Projects() {
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
						<Card
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
