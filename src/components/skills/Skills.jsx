import { useEffect, useState } from 'react';
import BgImage from '../../assets/skills/bg-image.png';
import { getSkills } from '../../service/firebase';
import { Spinner } from 'react-bootstrap';
import './Skills.scss';

function Skills() {
  const [skills, setSkills] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSkills()
      .then(res => setSkills(res[0]))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [])

  return (
    <section className="sectionSkills">
      <h2>SKILLS</h2>
      <div className="sectionSkills--technologies">
        <h3>Tools and technologies</h3>
        <ul>
          {
            !loading?
            skills.toolsAndTechnologies.map((item, i) => {
              return (
                <li key={i}>
                  {item}
                </li>
              )
            })
            :
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height:'50vh'}}>
              <Spinner animation="grow" />
            </div>
          }
        </ul>
      </div>
      <div className="sectionSkills--languages">
        <h3>Languages</h3>
        <ul>
          {
            !loading?
            skills.languages.map((item, i) => {
              return (
                <li key={i}>
                  {item}
                </li>
              )
            })
            :
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height:'50vh'}}>
              <Spinner animation="grow" />
            </div>
          }
        </ul>
      </div>
      <div className="sectionSkills--aptitudes">
        <h3>Aptitudes and knowledges</h3>
        <ul>
          {
            !loading?
            skills.aptAndKnowledge.map((item, i) => {
              return (
                <li key={i}>
                  {item}
                </li>
              )
            })
            :
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height:'50vh'}}>
              <Spinner animation="grow" />
            </div>
          }
        </ul>
      </div>
      <img src={BgImage} alt="bgImage" />
    </section>
  );
}

export default Skills;