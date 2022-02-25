import React, { useState, useEffect } from 'react';
import { FaMapPin } from 'react-icons/fa';
import Item from '../../assets/time-line/item.png';
import { Container } from 'react-bootstrap';
import DetailsModal from './details-modal/DetailsModal';
import { getWorkExperiences } from '../../service/firebase';
import { Spinner } from 'react-bootstrap';
import './WorkExperience.scss';

function WorkExperience() {
  const [workExperiences, setWorkExperiences] = useState();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();

  useEffect(() => {
    getWorkExperiences()
      .then(res => setWorkExperiences(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [])

  const openModal = (modalInfo) => {
    setShowModal(true);
    setModalData(modalInfo);
  };

  return (
    <section className="sectionWorkExp">
      <h2>WORK EXPERIENCES</h2>
      <Container fluid>
          {
            !loading?
            workExperiences.map((exp, i) => {
              return (
                <div key={i} className="sectionWorkExp--workExpContainer">
                  <p>{exp.date}</p>
                  <img src={Item} alt="linea de tiempo" className="timeLine" />
                  <div className="sectionWorkExp--workExpContainer__logo">
                    <FaMapPin color="white" className="pin" />
                    <img
                      src={exp.logoUrl}
                      alt={exp.company}
                      width="120px"
                    />
                  </div>
                  <div className="sectionWorkExp--workExpContainer__title">
                    <FaMapPin color="#537895" className="pin" />
                    <h3>{exp.company}</h3>
                  </div>
                  <h4>
                    {exp.title}
                  </h4>
                  <button onClick={() => openModal(exp.modalData)}>DETAILS</button>
                </div>
              )
            })
            :
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height:'50vh'}}>
              <Spinner animation="grow" />
            </div>
          }
      </Container>
      <DetailsModal
        modalData={modalData}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </section>
  );
}

export default WorkExperience;
