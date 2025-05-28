import './Contact.css'

export default function Contact(){
    return(
        <section className="contact">
            <div className="contact-content">
                <h2>Vamos conectar!</h2>
                <h3>De um Alo em gguedesprofissional@gmail.com</h3>
                <p>Para mais informações, aqui esta meu <span className="resue">resumo</span></p>
                <div className="links">
                    <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a href=""><ion-icon name="logo-github"></ion-icon></a>
                    <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
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