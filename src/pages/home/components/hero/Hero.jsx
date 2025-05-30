import './Hero.css'
import FotoPerfil from './img/FotoPerfil.jpg'

export default function Hero(){
    return(
        <section className="hero">
            <div className="hero-content">
                <div className="introduce-container">
                    <h2>Olá, eu sou <br /> Guilherme Guedes.</h2>
                    <p>Um desenvolvedor Web que mora no Rio de janeiro apaixonado por criar sites acessíveis e fáceis de usar.</p>
                    <div className="contact-container">
                        <div className="button-container">
                            <div className="button">CONTATO</div>
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                        <a href="https://www.linkedin.com/in/guilherme-guedes-b109041a1/" target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://github.com/GuilhermeGuedes1" target='_blank'><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="photo-container">
                    <img src={FotoPerfil} alt="foto-perfil" />
                </div>
            </div>
            
        </section>
    )
}