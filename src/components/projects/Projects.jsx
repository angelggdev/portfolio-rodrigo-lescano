import { useEffect } from 'react';
import { useState } from 'react';
import { getProjects } from '../../service/firebase';
import { Spinner } from 'react-bootstrap';
import './Projects.scss';

function Projects() {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then(res => setProjects(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [])

  return (
    <section id="projects" className="sectionProjects">
      <h2>PROJECTS</h2>
      {
        !loading?
        projects.map((project, i) => {
          return(
            <div key={i} className="sectionProjects--project">
              <h3>{project.title}</h3>
              <h4>{project.date}</h4>
              <h4>
                {project.description}
              </h4>
              <div className="sectionProjects--project__link">
                <a href={project.url}>VIEW WEBSITE</a>
              </div>
            </div>
          )
        })
        :
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height:'50vh'}}>
          <Spinner animation="grow" />
        </div>
      }
    </section>
  );
}

export default Projects;
