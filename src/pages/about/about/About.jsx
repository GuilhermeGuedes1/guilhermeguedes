import ContactButton from '../../../components/contactButton/ContactButton';
import LinkedinIcon from '../../../components/socialIcons/LinkedinIcon';
import GithubIcon from '../../../components/socialIcons/Github';

import './about.css';

import imageAbout from '../../../assets/about-img-grande.png';

export default function About() {
	return (
		<>
			<section className="about">
				<div className="about-container">
					<div className="title-container">
						<h2 className="title">SOBRE MIM</h2>
					</div>
					<div className="description">
						<h3 className="subtitle">
							Sou Web Developer, moro no Rio de Janeiro e estou em busca de
							oportunidades interessantes, estou aprimorando minhas habilidades
							com foco em me tornar um Dev Full Stack.
						</h3>
						<p className="text">
							Atualmente estou focado em aprimorar meus conhecimentos em
							React.js, onde inclusive essa pagina foi feita com o uso dessa
							linguagem e meu proximo passo é estudar Node.js para me tornar Dev
							Full Stack.
						</p>
						<div className="about-links">
							<ContactButton
								children={'Contato'}
								icon={<i className="fa-solid fa-arrow-right"></i>}
							/>
							<LinkedinIcon />
							<GithubIcon />
						</div>
					</div>
				</div>

				<img
					src={imageAbout}
					alt="foto rindo"
				/>
			</section>
		</>
	);
}
