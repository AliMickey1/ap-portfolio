import React from "react";

import { projects } from "../data";
import '../Styles/Portfolio.css'

function Projects() {
    return(
        <div>
            <h1>Portfolio</h1>
        <div className="container">
        {/* </div> */}
            <section className="projects">
            {/* <div className="container px-5 py-10 mx-auto text-center lg:px-40"> */}
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
              <div className="project-mp-link">
                {projects.map((project) => (
                  <a
                    href={project.link}
                    key={project.image}
                    className="proj-link">

                    <div className="project-info">
                        <h1 className="proj-title">
                            {project.title}
                        </h1>
                        <p className="proj-desc">{project.description}</p>
                        <h5 className="proj-lang">
                            {project.subtitle}
                        </h5>
                    </div> 

                    <div className="project-mp-img">
                      <img
                        alt="gallery"
                        className="proj-img"
                        src={project.image}
                      />

                    </div>
                  </a>
                ))}
              </div>
            </div>
             </section>
            <section className="graphics">
                <div className="graphics-container">
                    <h1>Digital Content Creation</h1>
                </div>
            </section>
        </div>
    </div> //end container
    );


};

export default Projects;