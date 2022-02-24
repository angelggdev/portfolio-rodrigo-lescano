import { Container } from 'react-bootstrap';
import { FaMapPin } from 'react-icons/fa';
import Item from '../../assets/work-experience/time-line/item.png';
import { getEducation, getCertifications } from '../../service/firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import './Education.scss';

function Education() {
  const [education, setEducation] = useState();
  const [loadingEducation, setLoadingEducation] = useState(true);

  const [certifications, setCertifications] = useState();
  const [loadingCertifications, setLoadingCertifications] = useState(true);

  useEffect(() => {
    getEducation()
      .then(res => setEducation(res))
      .catch(err => console.log(err))
      .finally(() => setLoadingEducation(false));
  }, [])

  useEffect(() => {
    getCertifications()
      .then(res => setCertifications(res))
      .catch(err => console.log(err))
      .finally(() => setLoadingCertifications(false));
  }, [])

  return (
    <section className="sectionEducation">
      <h2>EDUCATION</h2>
      <Container fluid>
          {
            !loadingEducation?
            education.map((ed, i) => {
              return (
                <div className="sectionEducation--edContainer" key={i}>
                  <p>{ed.date}</p>
                  <img src={Item} alt="linea de tiempo" className="timeLine" />
                  <div className="sectionEducation--edContainer__logo">
                    <FaMapPin color="white" className="pin" />
                    <img src={ed.logoUrl} alt={ed.institution} style={{maxWidth: '120px'}}/>
                  </div>
                  <div className="sectionEducation--edContainer__title">
                    <FaMapPin color="#537895" className="pin" />
                    <h3>{ed.institution}</h3>
                  </div>
                  <h4>{ed.title}</h4>
                </div>
              )
            })
            :
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height:'50vh'}}>
              <Spinner animation="grow" />
            </div>
          }
      </Container>
      <h2 className="certificationsTitle">CERTIFICATIONS</h2>
      {
        !loadingCertifications?
        certifications.map((cert, i) => {
          return (
            <div key={i} className="sectionEducation--certificationContainer">
              <img
                src={cert.logoUrl}
                alt={cert.title}
                style={{maxWidth: '300px'}}
              />
              <div>
                <h3>{cert.title}</h3>
                {
                  cert.info.map((info, i) => {
                    return (
                      <p key={i}>
                        {info}
                      </p>
                    )
                  })
                }
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

export default Education;
