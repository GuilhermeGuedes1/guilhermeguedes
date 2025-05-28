import './Projects.css'

export default function Projects(){
    return(
        <section className="projects">
            <div className="projects-content">
                <div className="tittle-container">
                    <h2>Projetos em destaque</h2>
                    <p>Aqui estão alguns dos projetos selecionados que demostram minha paixão pelo desenvolvimento.</p>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src="./src/pages/home/components/projects/img/weather-forecast.png" alt="project1"/>
                        <div className="project-info">
                            <h3 className='tittle'>Promotional landing page for our favorite show</h3>
                            <p className='description'>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                            <h4 className="tittle-project-info">Project Info</h4>
                            <div className="year-container">
                                <div className="year">Year</div>
                                <div className="year-date">2023</div>
                            </div>
                            <div className="role-container">
                                <div className="role">Tech</div>
                                <div className="role-name">JavaScript/React</div>
                            </div>
                            <div className="role-container">
                                <div className="role">Role</div>
                                <div className="role-name">Front-end Developer</div>
                            </div>
                              <div className="project-links">
                                <div className="link">VEJA NO GITHUB <ion-icon name="logo-github"></ion-icon></div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}