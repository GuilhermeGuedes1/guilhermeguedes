import ContactButton from '../../../components/contactButton/ContactButton';
import LinkedinIcon from '../../../components/socialIcons/LinkedinIcon';
import GithubIcon from '../../../components/socialIcons/Github';

import './about.css';

import imageAbout from '../../../assets/about-img.jpg';

export default function About() {
	return (
		<>
			<section className="about">
				<h2 className="title">SOBRE MIM</h2>
				<h3 className="subtitle">
					Sou Web Developer, moro no Rio de Janeiro e estou em busca de
					oportunidades interessantes, estou aprimorando minhas habilidades com
					foco em me tornar um Dev Full Stack.
				</h3>
				<p className="text">
					Atualmente estou focado em aprimorar meus conhecimentos em React.js,
					onde inclusive essa pagina foi feita com o uso dessa linguagem e meu
					proximo passo é estudar Node.js para me tornar Dev Full Stack. Tenho
					uma trajetória como DJ, tocando em clubes e também viajando com o
					Gabriel o Pensador, fazendo parte de sua banda e aprendendo a
					trabalhar em equipe em diferentes contextos. Além do desenvolvimento
					web, também faço lives jogando Counter-Strike e sigo dedicado à
					música, sempre buscando criar experiências únicas nos meus sets. Sou
					curioso, apaixonado por tecnologia e música, e estou sempre em busca
					de novas formas de transformar ideias em projetos criativos e
					impactantes.
				</p>
				<div className="links">
					<span className="linkedin"></span>
					<span className="github"></span>
				</div>

				<div className="about-links">
					<ContactButton
						children={'Contato'}
						icon={<i className="fa-solid fa-arrow-right"></i>}
					/>
					<LinkedinIcon />
					<GithubIcon />
				</div>

				<img
					src={imageAbout}
					alt="foto rindo"
				/>
			</section>
		</>
	);
}
