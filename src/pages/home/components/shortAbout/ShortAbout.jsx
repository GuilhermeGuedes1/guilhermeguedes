import './ShortAbout.css'

export default function ShortAbout(){
    return(
        <section className="short-about">
            <div className="short-content">
                <div className="about-tittle">
                    <h2>SOBRE MIM</h2>
                </div>
                <div className="about-description">
                    <p className="description">Sou Web Developer, moro no Rio de Janeiro e estou em busca de oportunidades interessantes e estou aprimorando minhas habilidades com foco em me tornar um Dev Full Stack.</p>
                    <span>Atualmente  estou focado em aprimorar meus conhecimentos em React.js, onde inclusive essa pagina foi feita com o uso dessa linguagem e meu proximo passo é estudar Node.js para me tornar Dev Full Stack.
                    <br/>
                    <br/>
                    Tenho uma trajetória como DJ, tocando em clubes e também viajando com o Gabriel o Pensador, fazendo parte de sua banda e aprendendo a trabalhar em equipe em diferentes contextos. 
                    <br/>
                    <br/>
                    Além do desenvolvimento web, também faço lives jogando Counter-Strike e sigo dedicado à música, sempre buscando criar experiências únicas nos meus sets. Sou curioso, apaixonado por tecnologia e música, e estou sempre em busca de novas formas de transformar ideias em projetos criativos e impactantes.
                    </span>
                    <a href="#">SAIBA MAIS</a>
                    <img src="./src/pages/home/components/shortAbout/img/perfil2.jpg" alt="perfil-photo" />
                </div>

            </div>
        </section>
    )
}