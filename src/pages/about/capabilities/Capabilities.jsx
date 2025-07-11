import './capabilities.css';

export default function Capabilities() {
	return (
		<section className="capabilities">
			<div className="skils-container">
				<h2>Minhas habilidades</h2>
			</div>
			<div className="skills-description">
				<p>
					"Estou sempre em busca de adicionar novas habilidades, pois acredito
					que o aprendizado contínuo é essencial para o crescimento
					profissional. Após aprender Node.js, pretendo me aprofundar em
					Tailwind CSS e TypeScript, tecnologias que considero fundamentais para
					minha evolução como desenvolvedor. Gosto de enfrentar novos desafios e
					aprimorar meus conhecimentos sempre que possível."
				</p>
				<div className="skills-list">
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JAVASCRIPT</li>
						<li>REACT</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
