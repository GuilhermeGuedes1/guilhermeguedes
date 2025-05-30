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
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-github"></i>
                    </div>
                </div>
                <div className="photo-container">
                    <img src={FotoPerfil} alt="foto-perfil" />
                </div>
            </div>
            
        </section>
    )
}