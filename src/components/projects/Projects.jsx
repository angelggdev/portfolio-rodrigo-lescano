import React from 'react';
import './Projects.scss';

function Projects() {
    return (
        <section id='projects' className='sectionProjects'>
            <h2>PROJECTS</h2>
            <div className='sectionProjects--project'>
                {/* <img src="#" alt=""/> */}
                <h3>PROJECT 1</h3>
                <h4>In process. Available soon.</h4>
                <h4>I'm still working on my personal project, but I'll be posting all the details here as soon as possible. Thank you!</h4>
                <button>VIEW WEBSITE</button>
            </div>
            <div className='sectionProjects--project'>
                {/* <img src="#" alt=""/> */}
                <h3>PROJECT 2</h3>
                <h4>In process. Available soon.</h4>
                <h4>I'm still working on my personal project, but I'll be posting all the details here as soon as possible. Thank you!</h4>
                <button>VIEW WEBSITE</button>
            </div>
        </section>
    )
}

export default Projects
