import './ShortAbout.css'

export default function ShortAbout(){
    return(
        <section className="short-about">
            <div className="short-content">
                <div className="about-tittle">
                    <h2>SOBRE MIM</h2>
                </div>
                <div className="about-description">
                    <p className="description">Sou Web Developer, moro no Rio de Janeiro e estou em busca de oportunidades interessantes. Atualmente, estou aprimorando minhas habilidades com foco em me tornar um Dev Full Stack.</p>
                    <span>I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</span>
                    <a href="#">SAIBA MAIS</a>
                    <img src="./src/pages/home/components/shortAbout/img/perfil2.jpg" alt="perfil-photo" />
                </div>

            </div>
        </section>
    )
}