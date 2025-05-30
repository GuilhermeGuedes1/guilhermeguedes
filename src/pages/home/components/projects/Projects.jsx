import { useState } from 'react'
import './Projects.css'


import WeatherForecastImg from './img/weather-forecast.png'

export default function Projects(){

    const projects = [
        {
            name: 'Weather-Forecast',
            description: 'Este é um site simples e funcional que exibe a previsão do tempo em tempo real, utilizando HTML, CSS e JavaScript. Para consumir os dados meteorológicos, o projeto integra uma API de previsão do tempo através da biblioteca Axios.',
            year: '2025',
            tech: 'Javascript',
            role : 'Front-end Developer',
            image: WeatherForecastImg,
            link: "https://guilhermeguedes1.github.io/weather-forecast/",
        }
    ]

    function ProjectModel({name, description, year, tech, role, image, link}){
        return(
            <div className="card">
                        <img src={image} alt={name}/>
                        <div className="project-info">
                            <h3 className='tittle'>{name}</h3>
                            <p className='description'>{description}</p>
                            <h4 className="tittle-project-info">Project Info</h4>
                            <div className="role-container">
                                <div className="year">Year</div>
                                <div className="year-date">{year}</div>
                            </div>
                            <div className="role-container">
                                <div className="role">Tech</div>
                                <div className="role-name">{tech}</div>
                            </div>
                            <div className="role-container">
                                <div className="role">Role</div>
                                <div className="role-name">{role}</div>
                            </div>
                        <div className="project-links">
                            <div className="link"><a href={link}>VEJA NO GITHUB</a></div>
                        </div>
                    </div>
            </div>
        )

    }

    return(
        <section className="projects" id='projects'>
            <div className="projects-content">
                <div className="tittle-container">
                    <h2>Projetos em destaque</h2>
                    <p>Aqui estão alguns dos projetos selecionados que demostram minha paixão pelo desenvolvimento.</p>
                </div>
                <div className="card-container">
                    {projects.map((project, index) => (
                        <ProjectModel
                            key={index}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            year={project.year}
                            tech={project.tech}
                            role={project.role}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
