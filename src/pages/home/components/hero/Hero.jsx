import './Hero.css';
import FotoPerfil from '../../../../assets/FotoPerfil.jpg';
import ContactButton from '../../../../components/contactButton/ContactButton';
import LinkedinIcon from '../../../../components/socialIcons/LinkedinIcon';
import GithubIcon from '../../../../components/socialIcons/Github';

export default function Hero() {
	return (
		<section className="hero">
			<div className="hero-content">
				<div className="introduce-container">
					<h2>
						Olá, eu sou <br /> Guilherme Guedes.
					</h2>
					<p>
						Um desenvolvedor Web que mora no Rio de janeiro apaixonado por criar
						sites acessíveis e fáceis de usar.
					</p>
					<div className="contact-hero">
						<ContactButton
							children={'Contato'}
							icon={<i className="fa-solid fa-arrow-right"></i>}
						/>
						<LinkedinIcon />
						<GithubIcon />
					</div>
				</div>
				<div className="photo-container">
					<img
						src={FotoPerfil}
						alt="foto-perfil"
					/>
				</div>
			</div>
		</section>
	);
}
