import React, { useState } from 'react';
import { FaMapPin } from 'react-icons/fa';
import './WorkExperience.scss';
import Dxc from '../../assets/work-experience/dxc.png';
import PreventSolutions from '../../assets/work-experience/prevent-solutions.png';
import Sofrecom from '../../assets/work-experience/sofrecom.png';
import FirstItem from '../../assets/work-experience/time-line/first-item.png';
import Item from '../../assets/work-experience/time-line/item.png';
import { Col, Container, Row } from 'react-bootstrap';
import DetailsModal from './details-modal/DetailsModal';

function WorkExperience() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();

  const openModal = (modalInfo) => {
    setShowModal(true);
    setModalData(modalInfo);
  };

  const exp1 = {
    title: 'SUPPORT OF NETWORK SYSTEMS - HELP DESK - APPLICATION SUPORT',
    company: 'Prevent Solution S.A',
    date: 'May 2017 - September 2019',
    responsibilities: [
      'Tasks performed for client Government of the City of Buenos Aires and Ministry of Infrastructure of Buenos Aires.',
      'Technologies used: SQL, Linux, MariaDB, Windows',
      'Help desk, support access control system (Biometric control, CCTV , System alarm), Server Arming, Application Support Server, Windows Remote,Support Database analyst, Sql.',
      'On-site support, maintenance of network equipment, wiring, infrastructural testing.',
      'Carry out client Implementation projects.',
    ],
  };

  const exp2 = {
    title: 'UNIX LINUX SYSTEM ADMINISTRATOR',
    company: 'DXC Technology',
    date: 'April 2021 - Present',
    responsibilities: [
      "Manage +4000 servers located in the customer's data centers in USA.",
      'Provide day-to-day support to ensure infrastructure performance on Red Hat Linux.',
      'Schedule and perform server maintenance and patching every quarter',
      'Manage projects and Service Requests to fix punctual issues on the servers.',
      'Implement automation in every possible task, to sustain the entire operation.',
    ],
  };

  const exp3 = {
    title: 'SYSTEM ANALYST AT TELECOM',
    company: 'Sofrecom Argentina SA',
    date: 'September 2019 - April 2021',
    responsibilities: [
      'Support L2/L3 (Production)',
      'Data Management',
      'Operational management',
      'Saas Applications.',
      'Responsible for the management and execution of specific technical projects, as opposed to general management in the environment',
      'Data analysis',
      'Process verifications and deployments',
      'Assist team with managing infrastructure operations',
      'Manage complex technical projects.',
      'Provide secondary and tertiary support for various systems used throughout the organization.',
      'Assist the Service Desk team with level 3 support and other support issues.',
      'Provide guidance and support with desktop imaging, deployment, maintenance, and patch management.',
      'Create and maintain technical IT documentation.',
      'Implement and manage monitoring systems for IT systems.',
    ],
  };

  return (
    <section className="sectionWorkExp">
      <h2>WORK EXPERIENCES</h2>
      <Container fluid>
        <Row>
          <Col className="sectionWorkExp--workExpContainer">
            <p>2017 - 2019</p>
            <img src={FirstItem} alt="linea de tiempo" className="timeLine" />
            <div className="sectionWorkExp--workExpContainer__logo">
              <FaMapPin color="white" className="pin" />
              <img
                src={PreventSolutions}
                alt="Prevent Solution S.A."
                width="120px"
              />
            </div>
            <div className="sectionWorkExp--workExpContainer__title">
              <FaMapPin color="#537895" className="pin" />
              <h3>Prevent Solution S.A.</h3>
            </div>
            <h4>
              SUPPORT OF NETWORK SYSTEMS - HELP DESK - APPLICATION SUPPORT
            </h4>
            <button onClick={() => openModal(exp1)}>DETAILS</button>
          </Col>
          <Col className="sectionWorkExp--workExpContainer">
            <p>2019 - 2021</p>
            <img src={Item} alt="linea de tiempo" className="timeLine" />
            <div className="sectionWorkExp--workExpContainer__logo">
              <FaMapPin color="white" className="pin" />
              <img src={Sofrecom} alt="Sofrecom Argentina S.A." width="120px" />
            </div>
            <div className="sectionWorkExp--workExpContainer__title">
              <FaMapPin color="#537895" className="pin" />
              <h3>Sofrecom Argentina S.A.</h3>
            </div>
            <h4>SYSTEM ANALYST AT TELECOM</h4>
            <button onClick={() => openModal(exp2)}>DETAILS</button>
          </Col>
          <Col className="sectionWorkExp--workExpContainer">
            <p>2021 - Present</p>
            <img src={Item} alt="linea de tiempo" className="timeLine" />
            <div className="sectionWorkExp--workExpContainer__logo">
              <FaMapPin color="white" className="pin" />
              <img src={Dxc} alt="DXC Technology" width="120px" />
            </div>
            <div className="sectionWorkExp--workExpContainer__title">
              <FaMapPin color="#537895" className="pin" />
              <h3>DXC Technology</h3>
            </div>
            <h4>UNIX LINUX SYSTEM ADMINISTRATOR</h4>
            <button onClick={() => openModal(exp3)}>DETAILS</button>
          </Col>
        </Row>
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
