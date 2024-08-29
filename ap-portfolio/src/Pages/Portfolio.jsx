import React from "react";

// import { projects } from "../Data/data";
import projects from '../Data/data';
import graphics from "../Data/gdata";
import '../Styles/Portfolio.css'


const Projects = () => {
    return(
        <div className="top">
            <h1>Portfolio</h1>
        <div className="container">
            <section className="projects">
            <div className="projects-container">
              <div className="project-intro">
                <h1 className="proj-heading">
                  Apps and Websites I've Built and/or Collaborated on
                </h1>
                <p className="intro">
                  Here are apps and websites I have built either through BloomTech, as a independent project or on a team. 
                  I competed in the "Code a Vote" Hackathon with a team of 4 which is also included below. The 
                  programming languages that was used, a link to the GitHub repository, and a screenshot is displayed for each.
                </p>
              </div>
              <div className="project-details">
                {projects.map((project, index) => (
                  <div key={index} className="project-card">
                    <div className="project-info">
                        <h1 className="proj-title">
                            <a href='{project.link}'>{project.title}</a>
                        </h1>
                        <p className="proj-desc">{project.description}</p>

                        <a href='{project.link}'><img src={project.image} alt={project.title} className="project-image"/></a>
                        
                        <h5 className="proj-lang">
                        <a href='{project.link}'>{project.subtitle}</a>
                        
                        </h5>
                    </div> 
                    <hr/>
                  </div>
                ))}
              </div>
            </div>
            
             </section>
             <section className="graphics">
              <div className="graphic-container">
                <div className="graphic-header">
                  <h1>Graphics</h1>
                  <p>
                    Here are projects that have been paid to complete or have completed for free.
                  </p>
                </div>
                <div className="graphic-content">
                  <div className="videos">
                    <h2>Videos</h2>
                    <iframe width="460" height="315" src="https://www.youtube.com/embed/uAwqMgRXJ5M?si=--Z9v3YNEYmPVCdJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <div className="graphic-designs"> 
                    <h2>Graphic Designs</h2>
                    <div className="graphic-details">
                      {graphics.map((graphics, index) => (
                        <div key={index} className="graphic-card">
                          <div className="graphic-info">
                              <h1 className="graphic-title">
                                  {graphics.title}
                              </h1>
                                <img src={graphics.image} alt={graphics.title} className="graphic-image"/>

                    </div> 
                    <hr/>
                  </div>
                ))}
              </div>
                  </div>
                </div>
              </div>


             </section>

        </div>
        
    </div> //end container

    );

};

export default Projects;
