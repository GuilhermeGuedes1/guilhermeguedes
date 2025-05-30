import './Contact.css'

export default function Contact(){
    return(
        <section className="contact" id='contact'>
            <div className="contact-content">
                <h2>Vamos conectar!</h2>
                <h3>De um Alô em <strong>gguedesprofissional@gmail.com</strong></h3>
                <div className="links">
                    <a href="https://www.linkedin.com/in/guilherme-guedes-b109041a1/" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a href="https://github.com/GuilhermeGuedes1" target='_blank'><ion-icon name="logo-github"></ion-icon></a>
                    <a href="https://www.instagram.com/djchrisroc/" target='_blank'><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href="https://x.com/Chrisroc___" target='_blank'><ion-icon name="logo-twitter"></ion-icon></a>
                </div>
                <form>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id='name'/>
                    <label htmlFor="email">Email</label>
                    <input type="email" />
                    <label htmlFor="subject">Assunto</label>
                    <input type="text"/>
                    <label htmlFor="message">Mensagem</label>
                    <textarea name="Text-area" id="message"></textarea>
                    <span className="button">Submit</span>
                </form>
            </div>
        </section>
    )
}