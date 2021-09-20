import React from 'react';
import HeaderText from './headertext';
import ProjectsContainer from './projectscontainer';

function Projects(){
    return (
        <div className="projects" id="projects">
            <div class="custom-shape-divider-top-1631659749">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="containerProjects">
                <HeaderText Texto="Proyectos"/>
                <ProjectsContainer/>
            </div>
            <div class="custom-shape-divider-bottom-1631806343">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
           );
}

export default Projects;
