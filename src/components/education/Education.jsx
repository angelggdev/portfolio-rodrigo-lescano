import { Container, Row, Col } from 'react-bootstrap';
import { FaMapPin } from 'react-icons/fa';
import Uba from '../../assets/education/uba.png';
import Coder from '../../assets/education/coder.png';
import FirstItem from '../../assets/work-experience/time-line/first-item.png';
import Item from '../../assets/work-experience/time-line/item.png';
import Cisco from '../../assets/education/certifications/cisco.png';
import './Education.scss';

function Education() {
  return (
    <section className="sectionEducation">
      <h2>EDUCATION</h2>
      <Container fluid>
        <Row>
          <Col className="sectionEducation--edContainer">
            <p>year - year</p>
            <img src={FirstItem} alt="linea de tiempo" className="timeLine" />
            <div className="sectionEducation--edContainer__logo">
              <FaMapPin color="white" className="pin" />
              <img src={Uba} alt="Universidad de Buenos Aires" />
            </div>
            <div className="sectionEducation--edContainer__title">
              <FaMapPin color="#537895" className="pin" />
              <h3>Universidad de Buenos Aires</h3>
            </div>
            <h4>DEGREE IN COMPUTER SCIENCE</h4>
          </Col>
          <Col className="sectionEducation--edContainer">
            <p>2020 - 2021</p>
            <img src={Item} alt="linea de tiempo" className="timeLine" />
            <div className="sectionEducation--edContainer__logo">
              <FaMapPin color="white" className="pin" />
              <img src={Coder} alt="CoderHouse" />
            </div>
            <div className="sectionEducation--edContainer__title">
              <FaMapPin color="#537895" className="pin" />
              <h3>CoderHouse</h3>
            </div>
            <h4>
              INFORMATION TECHNOLOGY
              <br />
              Full Stack Developer
            </h4>
          </Col>
        </Row>
      </Container>
      <h2 className="certificationsTitle">CERTIFICATIONS</h2>
      <div className="sectionEducation--certificationContainer">
        <img
          src={Cisco}
          alt="Cisco Certified Network Associate Security (CCNA)"
        />
        <div>
          <h3>Cisco Certified Network Associate Security (CCNA)</h3>
          <p>Issuing authority: Cisco</p>
          <p>Issuing date: March 2019 (No expiration date)</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
