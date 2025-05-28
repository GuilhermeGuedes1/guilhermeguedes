import './Header.css'

export default function Header (){
    return(
        <section className="header">
            <nav>
                <h1>Guilherme Guedes</h1>
                <ion-icon name="menu-outline"></ion-icon>
                <div className="nav-links">
                    <a href="#">Trabalhos</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                </div>
            </nav>
        </section>
    )
}